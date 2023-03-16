import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import matcapJPG from "../../assets/matcap_plastic_yellow.jpg";
import { useTexture } from "@react-three/drei";

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
  //src / assets / matcap_plastic_yellow.jpg;
  const matcap = useTexture(matcapJPG);
  const matcapURL = useTexture("./src/assets/matcap_plastic_yellow.jpg");
  console.log(matcap, matcapURL);

  return (
    <>
      <mesh castShadow receiveShadow ref={boxRef}>
        <boxGeometry args={[6, 6, 2]} />
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </>
  );
}
export default PlasticCube;
