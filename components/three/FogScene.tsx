"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#EF4444"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function MountainMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 8, 80, 30);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const noise =
        Math.sin(x * 0.5) * 0.8 +
        Math.sin(x * 1.2 + y * 0.8) * 0.5 +
        Math.sin(x * 0.3 + y * 0.4) * 1.2;
      pos.setZ(i, noise * 0.6);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -4]}>
      <meshStandardMaterial
        color="#1a1a2e"
        wireframe={false}
        roughness={0.9}
        metalness={0.05}
        opacity={0.8}
        transparent
      />
    </mesh>
  );
}

function FogClouds() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.3;
    }
  });

  const cloudPositions: [number, number, number][] = [
    [-3, 0.5, -2],
    [2, 0, -3],
    [-1, -0.5, -4],
    [4, 0.3, -2.5],
    [-4, -0.3, -3.5],
  ];

  return (
    <group ref={groupRef}>
      {cloudPositions.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.8 + i * 0.15, 8, 8]} />
          <meshStandardMaterial
            color="#e2e8f0"
            transparent
            opacity={0.04 + i * 0.01}
            roughness={1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FogScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-5, 3, 2]} intensity={0.8} color="#EF4444" />
        <ParticleField />
        <MountainMesh />
        <FogClouds />
        <fog attach="fog" args={["#0a0a12", 8, 25]} />
      </Canvas>
    </div>
  );
}
