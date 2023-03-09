import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

function MyBox() {
  // Declare refs for animation here
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
}
function MyCanvas() {
  return (
    <Canvas camera={{ position: [5, 5, -5], fov: 75 }}>
      <MyBox />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
    </Canvas>
  );
}

export default MyCanvas;
