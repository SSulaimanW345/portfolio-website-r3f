import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Cubicle = ({ position, rotation, radius }) => {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const [opacity, setOpacity] = useState(0.3);

  // Handle hover events
  const handlePointerOver = () => {
    setOpacity(0); // Increase opacity on hover
  };

  const handlePointerOut = () => {
    setOpacity(0.3); // Revert opacity when hover ends
  };
  // Create geometry
  const geometry = new THREE.IcosahedronGeometry(radius, 2);

  useFrame(() => {
    if (meshRef.current && wireframeRef.current) {
      meshRef.current.rotation.y += 0.005; // Rotate the shape
      wireframeRef.current.rotation.y += 0.005; // Sync wireframe rotation
    }
  });
  return (
    <group position={position} rotation={rotation}>
      {/* Translucent black icosahedron */}
      <mesh ref={meshRef} geometry={geometry} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <meshPhongMaterial
          color="black"
          transparent
          opacity={opacity} // Set translucency
          side={THREE.DoubleSide} // Render both sides
        />
      </mesh>

      {/* Wireframe */}
      <mesh ref={wireframeRef} geometry={geometry}>
        <meshBasicMaterial color="#4b5563" wireframe />
      </mesh>
    </group>
  );
};
