import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
// import matcapJPG from "../../assets/matcap_plastic_yellow.jpg";
import { useGLTF, useTexture } from "@react-three/drei";

function PlasticCube() {
  // Declare refs for animation here
  const boxRef = useRef<Mesh>(null!);

  // Rotation Animation
  useFrame(() => {
    boxRef.current.rotation.x -= 0.005;
    boxRef.current.rotation.y -= 0.005;
    boxRef.current.rotation.z += 0.01;
  });

  // Create matcap material
  // const matcap = useTexture(matcapJPG);
  return (
    <mesh ref={boxRef} attach="material">
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="pink" />
      {/* <meshMatcapMaterial matcap={matcap} /> */}
    </mesh>
  );
}
export default PlasticCube;
