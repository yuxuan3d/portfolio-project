import * as THREE from 'three'
import { useRef, useMemo, useState } from 'react'
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

export const FloatingScene = (props) => {
  const sphereMaterials = useMemo(
    () =>
      Array.from(
        { length: sphereCount },
        (_, i) => materials[i % materials.length]
      ),
    []
  );

  const targetClumpCenter = useMemo(() => new THREE.Vector3(4, 0, 0), []);
  

  return (
    <Canvas flat shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }} {...props}>
      <ambientLight intensity={0.5} />
      <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
        <group position={targetClumpCenter.toArray()}>
        <Pointer />
        {sphereMaterials.map((props, i) => (
          <Sphere key={i} {...props} targetCenter={targetClumpCenter}/>
        ))}
         {Array.from({ length: translucentSphereCount }).map((_, i) => (
          <TranslucentSphere key={`translucent-${i}`} targetCenter={targetClumpCenter}/>
        ))}
        </group>
      </Physics>
      <Environment files="/brown_photostudio_02_1k.hdr" background={false} environmentIntensity={1}/>
      <EffectComposer disableNormalPass multisampling={2}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={2} />
        <Bloom mipmapBlur luminanceThreshold={1} intensity={1} radius={0.5} />
        <ToneMapping
          adaptive={true}
          resolution={256}
          middleGrey={0.6}
          maxLuminance={16.0}
          averageLuminance={1.0}
          adaptationRate={1.0}
        />
      </EffectComposer>
      </Canvas>
  )
}

function Sphere({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, targetCenter, ...props }) {
  const api = useRef()
  const ref = useRef()
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
  const impulseDirection = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    if (api.current && targetCenter) {
      // Calculate the world position of the ball
      const worldPos = api.current.translation();

      // Calculate vector FROM worldPos TOWARDS targetCenter
      impulseDirection.copy(targetCenter).sub(worldPos);

      // Apply impulse along this new direction
      // Note: We might need to adjust the scalar (0.2) depending on desired effect
      api.current.applyImpulse(impulseDirection.multiplyScalar(0.2));
    }
  })

  return (
    <RigidBody linearDamping={6} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[0.6]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshPhysicalMaterial  {...props} />
        {children}
      </mesh>
    </RigidBody>
  )
}

function TranslucentSphere({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread,  color = 'white', targetCenter, ...props }) {
  const api = useRef()
  const ref = useRef()
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
  const impulseDirection = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    if (api.current && targetCenter) {
      // Calculate the world position of the ball
      const worldPos = api.current.translation();

      // Calculate vector FROM worldPos TOWARDS targetCenter
      impulseDirection.copy(targetCenter).sub(worldPos);

      // Apply impulse along this new direction
      // Note: We might need to adjust the scalar (0.2) depending on desired effect
      api.current.applyImpulse(impulseDirection.multiplyScalar(0.2));
    }
  })
  
  return (
    <RigidBody linearDamping={6} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[0.6]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <MeshTransmissionMaterial clearcoat={1} ior={1.2} thickness={1} anisotropicBlur={0.5} anisotropy={0.1} chromaticAberration={0.1}/>
        {children}
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
