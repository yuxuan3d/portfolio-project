import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Lightformer } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { useControls } from "leva"
import {Effects} from "./Effects"

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const blueBaubleMaterial = new THREE.MeshStandardMaterial({ color: "#312a4c", roughness: 0.2, metalness:0.3, envMapIntensity: 1 })
const whiteBaubleMaterial = new THREE.MeshStandardMaterial({ color: "white", roughness: 0.2, metalness:0, envMapIntensity: 1 })
const goldBaubleMaterial = new THREE.MeshStandardMaterial({ color: "#e5a949", roughness: 0.15, metalness:0.75, envMapIntensity: 1 })

const materials = [blueBaubleMaterial, whiteBaubleMaterial, goldBaubleMaterial]
const totalSpheres = 40

export const BallClump = () => {
    // const spheresPerMaterial = Math.floor(totalSpheres / materials.length)
    // const remainder = totalSpheres % materials.length;
    const newColor = useControls({color: "#282241", roughness: 0.3, metalness:0.3, envMapIntensity: 1})
    const materialTest = new THREE.MeshStandardMaterial(newColor)
    const {aintensity} = useControls({aintensity: 1.5})
    const {sintensity,position} = useControls({sintensity: 3, position: [0, 10, 0]})
    const {eintensity} = useControls({eintensity: 0.5})

    return (
    <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
        <color attach="background" args={['#18171C']} />
        <ambientLight intensity={aintensity} />
        {/* <spotLight intensity={sintensity} angle={angle} penumbra={penumbra} position={[0, 10, 0]} castShadow shadow-mapSize={[512, 512]} /> */}
        <directionalLight intensity={sintensity} position={position} castShadow shadow-mapSize={[512, 512]} />
        
        <Physics gravity={[0, 2, 0]} iterations={10}>
        <Pointer />
        <Clump key={1} material={materialTest} count={totalSpheres} />
        {/* {materials.map((material, index) => {
          // Add the remainder to the first group for simplicity
          const count = spheresPerMaterial + (index === 0 ? remainder : 0);
          if (count === 0) return null; // Don't render if count is zero
          return (
            <Clump
              key={index} // Important for React lists
              material={materialTest} // Pass the specific material
              count={count}      // Pass the number of spheres for this group
            />
          );
        })} */}
        </Physics>
        {/* <Environment files="/brown_photostudio_02_1k.hdr" background={false} environmentIntensity={eintensity} /> */}
        
        
        <Environment resolution={256}>
            <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
            <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
        </Environment>
        <Effects />
    </Canvas>
  )
}

function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), material, count }) {
  // const { outlines } = useControls({ outlines: { value: 0.0, step: 0.01, min: 0, max: 0.05 } })
  const [ref, api] = useSphere(() => ({ args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)] }))

  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat)
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
    }
  })
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[sphereGeometry, material, count]}>
    </instancedMesh>
  )
}

function Pointer() {
  const viewport = useThree((state) => state.viewport)
  const [ref, api] = useSphere(() => ({ type: "Kinematic", args: [2], position: [0, 0, 0] }))
  useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
  return (
    <mesh ref={ref} scale={1}>
      {/* <sphereGeometry /> */}
      {/* <meshBasicMaterial color={[4, 4, 4]} toneMapped={false} /> */}
      {/* <pointLight intensity={8} distance={10} /> */}
    </mesh>
  )
}
