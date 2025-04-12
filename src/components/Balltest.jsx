import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Physics, RigidBody, BallCollider, RapierRigidBody } from '@react-three/rapier';
import * as THREE from 'three';

// Sphere component - adjusted for floating
function Sphere({ position = [0, 0, 0], color = 'white', radius = 1 }) {
  const rigidBodyRef = useRef<RapierRigidBody>(null); // Ref to access the physics body

  // Optional: Add a slight centering force in useFrame if desired
//   useFrame((state, delta) => {
//     if (!rigidBodyRef.current) return;

//     // Example: Gentle pull towards center to prevent drifting too far
//     const currentPos = rigidBodyRef.current.translation();
//     const pullStrength = 0.5;
//     const impulse = {
//         x: -currentPos.x * pullStrength * delta,
//         y: -currentPos.y * pullStrength * delta,
//         z: -currentPos.z * pullStrength * delta,
//     };
//     rigidBodyRef.current.applyImpulse(impulse, true);
//   });

  return (
    <RigidBody
      ref={rigidBodyRef} // Attach the ref
      colliders={<BallCollider args={[radius]} />}
      position={position}
      restitution={0.7}
      friction={0.5}
      linearDamping={2} // Increased damping for floating feel
      angularDamping={1.5} // Increased damping for floating feel
      gravityScale={0} // Ensure no gravity affects *this specific* body (alternative to setting global gravity)
    >
      <mesh castShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
      </mesh>
    </RigidBody>
  );
}


// Pointer Component - Controls the kinematic collider with the mouse
function Pointer({ radius = 2.5 }) {
  const rigidBodyRef = useRef<RapierRigidBody>(null); // Ref to the kinematic body
  const { viewport } = useThree(); // Get viewport dimensions

  useFrame(({ mouse }) => {
    if (!rigidBodyRef.current) return;

    // Map mouse coordinates (-1 to 1) to scene coordinates
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    // Update the kinematic body's target position for the next physics step
    // This smoothly moves the collider without teleporting
    rigidBodyRef.current.setNextKinematicTranslation({ x: x, y: y, z: 0 });
  });

  return (
    // Kinematic body: moved by code, affects dynamic bodies, not affected by forces
    <RigidBody
      ref={rigidBodyRef}
      type="kinematicPosition" // Use kinematicPosition for smooth, code-driven movement
      colliders={<BallCollider args={[radius]} />} // Collider shape for interaction
      friction={0.5}
      restitution={0.5}
    >
      {/* No visible mesh needed for the pointer, unless for debugging */}
      {/* <mesh>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshBasicMaterial color="red" wireframe />
      </mesh> */}
    </RigidBody>
  );
}


// Main Scene Component
export function BallTest() {
    const [isPhysicsReady, setIsPhysicsReady] = useState(false);

    // Set physics ready after the first mount
    useEffect(() => {
        setIsPhysicsReady(true);
    }, []); // Empty dependency array = run once on mount

  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}> {/* Camera closer */}
      <color attach="background" args={['#18171C']} /> {/* Dark background */}

      {/* Lights */}
      <ambientLight intensity={1.0} /> {/* Adjusted intensity */}
      <directionalLight
        position={[5, 5, 10]} // Adjusted position
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Suspense fallback={null}>
        {/* Set global gravity to zero */}
        {/* <Physics gravity={[0, 0, 0]} debug={false}> */}

          {/* Add the floating Sphere */}
          {/* <Sphere position={[0, 0, 0]} color="white" radius={1} /> */}

          {/* Add the mouse Pointer */}
          {/* <Pointer radius={2.5} /> */}

        {/* </Physics> */}

        <Environment preset="city" background={false} environmentIntensity={0.5} />
      </Suspense>

      <OrbitControls enablePan={false} enableZoom={false} /> {/* Disable pan/zoom for simpler interaction */}
    </Canvas>
  );
}