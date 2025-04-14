import * as THREE from 'three'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { EffectComposer, Bloom, N8AO, ToneMapping} from '@react-three/postprocessing'

const materials = [
  // Material 1: Blue Metal
  {
    color: '#392b7c',
    roughness: 0.3,
    metalness: 0.65,
  },
  // Material 2: Gold
  {
    color: '#c18e26',
    roughness: 0.2,
    metalness: 1,
  },
];

const sphereCount = 16; 
const translucentSphereCount = 8;


function Sphere({ radius, spread, targetCenter, position, vec = new THREE.Vector3(), r = THREE.MathUtils.randFloatSpread, ...props }) {
  const api = useRef()
  const ref = useRef()
  const pos = useMemo(() => {
    if (position) return position; // Use explicit position if provided
    // Otherwise, calculate random position around targetCenter
    const offsetX = r(spread / 2); // Adjust divisor for desired clump tightness
    const offsetY = r(spread / 2);
    const offsetZ = r(spread / 4); // Maybe less spread on Z-axis
    return [
      targetCenter.x + offsetX,
      targetCenter.y + offsetY,
      targetCenter.z + offsetZ
    ];
  }, [position, spread, targetCenter]);
  const impulseDirection = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    if (api.current && targetCenter) {
      const worldPos = api.current.translation();
      impulseDirection.copy(targetCenter).sub(worldPos);
      // Normalize the direction vector before applying impulse for consistent force
      api.current.applyImpulse(impulseDirection.normalize().multiplyScalar(0.6));
    }
  })

  return (
    <RigidBody linearDamping={6} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[radius]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshPhysicalMaterial  {...props} />
      </mesh>
    </RigidBody>
  )
}

function TranslucentSphere({radius, spread, targetCenter, position, vec = new THREE.Vector3(), r = THREE.MathUtils.randFloatSpread, ...props }) {
  const api = useRef()
  const ref = useRef()
  const pos = useMemo(() => {
    if (position) return position; // Use explicit position if provided
    // Otherwise, calculate random position around targetCenter
    const offsetX = r(spread / 2); // Adjust divisor for desired clump tightness
    const offsetY = r(spread / 2);
    const offsetZ = r(spread / 4); // Maybe less spread on Z-axis
    return [
      targetCenter.x + offsetX,
      targetCenter.y + offsetY,
      targetCenter.z + offsetZ
    ];
  }, [position, spread, targetCenter]);
  const impulseDirection = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    if (api.current && targetCenter) {
      const worldPos = api.current.translation();
      impulseDirection.copy(targetCenter).sub(worldPos);
      // Normalize the direction vector before applying impulse for consistent force
      api.current.applyImpulse(impulseDirection.normalize().multiplyScalar(0.6));
    }
  })
  
  return (
    <RigidBody linearDamping={6} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[radius]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <MeshTransmissionMaterial clearcoat={1} ior={1.4} thickness={1} anisotropicBlur={1} anisotropy={0.1} chromaticAberration={0.1}/>
      </mesh>
    </RigidBody>
  )
}


function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)))
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}

function SceneContent({ sphereMaterials, translucentSphereCount }) {
  // *** This is where useThree() is safe to call ***
  const { size, viewport } = useThree();

  // Initial state calculation now happens safely inside the Canvas context
  const [responsiveParams, setResponsiveParams] = useState(() => {
      const initialTargetX = viewport.width / 4;
      const initialSpread = Math.min(viewport.width, viewport.height) / 2;
      const initialRadius = Math.max(0.4, Math.min(0.8, viewport.width * 0.03)); // Example clamped radius
      return {
          targetCenter: new THREE.Vector3(initialTargetX, 0, 0),
          ballRadius: initialRadius,
          spreadFactor: initialSpread,
      };
  });

  // Effect to update params when size/viewport changes
  useEffect(() => {
    const newTargetX = viewport.width / 4;
    const newSpread = Math.min(viewport.width, viewport.height) / 2;
    const newRadius = Math.max(0.4, Math.min(0.8, viewport.width * 0.04)); // Recalculate radius

    setResponsiveParams({
      targetCenter: new THREE.Vector3(newTargetX, 0, 0),
      ballRadius: newRadius,
      spreadFactor: newSpread,
    });

    // console.log(`Resized: Viewport W: ${viewport.width.toFixed(2)}, H: ${viewport.height.toFixed(2)}, Radius: ${newRadius.toFixed(2)}`);

  }, [size.width, size.height, viewport.width, viewport.height]); // Dependencies

  return (
    <>
      <ambientLight intensity={0.5} />
      <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
        {/* Group position might not be needed if targetCenter is handled internally by spheres */}
        {/* <group position={responsiveParams.targetCenter.toArray()}> */}
        <group>
          <Pointer />
          {sphereMaterials.map((props, i) => (
            <Sphere
              key={i}
              {...props}
              // Pass down the responsive values
              targetCenter={responsiveParams.targetCenter}
              radius={responsiveParams.ballRadius}
              spread={responsiveParams.spreadFactor}
            />
          ))}
          {Array.from({ length: translucentSphereCount }).map((_, i) => (
            <TranslucentSphere
              key={`translucent-${i}`}
              // Pass down the responsive values
              targetCenter={responsiveParams.targetCenter}
              radius={responsiveParams.ballRadius}
              spread={responsiveParams.spreadFactor}
            />
          ))}
        </group>
      </Physics>
      <Environment files="/brown_photostudio_02_1k.hdr" background={false} environmentIntensity={1}/>
      <EffectComposer disableNormalPass multisampling={2}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={2} />
        <Bloom mipmapBlur luminanceThreshold={1} intensity={1} radius={0.5} />
        <ToneMapping adaptive={true} resolution={256} middleGrey={0.6} maxLuminance={16.0} averageLuminance={1.0} adaptationRate={1.0} />
      </EffectComposer>
    </>
  );
}


export const FloatingScene = (props) => {
  // Pre-calculate materials outside the inner component if they don't depend on size
  const sphereMaterials = useMemo(
    () =>
      Array.from(
        { length: sphereCount },
        (_, i) => materials[i % materials.length]
      ),
    []
  );

  return (
    // Canvas setup remains the same
    <Canvas flat shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }} {...props}>
      {/* Render the inner component that uses the hooks */}
      <SceneContent
        sphereMaterials={sphereMaterials}
        translucentSphereCount={translucentSphereCount}
      />
    </Canvas>
  );
};