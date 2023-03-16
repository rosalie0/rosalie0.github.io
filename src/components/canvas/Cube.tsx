import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

function Cube() {
  // Declare refs for animation here
  const boxRef = useRef<Mesh>(null!);

  // Rotation Animation
  useFrame(() => {
    boxRef.current.rotation.x -= 0.005;
    boxRef.current.rotation.y -= 0.005;
    boxRef.current.rotation.z += 0.01;
  });

  return (
    <mesh position={[3, 3, 3]} ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
}
export default Cube;
