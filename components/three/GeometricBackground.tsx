"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshBasicMaterial
        color="#7C3AED"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["transparent"]} />
        <RotatingShape />
      </Canvas>
    </div>
  );
}
