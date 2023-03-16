import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import matcapYellow from "../../assets/matcap_plastic_yellow.jpg";
import matcapMint from "../../assets/matcap_plastic_mint.jpg";
import matcapMagenta from "../../assets/matcap_plastic_magenta.jpg";
import matcapDarkPink from "../../assets/matcap_dark_pink.png";

// import catGLTF from "../../assets/cat.gltf";
import { useTexture, useGLTF } from "@react-three/drei";

function CatSitting() {
  // Declare refs for animation here
  const ref = useRef<Mesh>(null!);

  // Rotation Animation
  useFrame(() => {
    ref.current.rotation.y -= 0.005;
    // boxRef.current.rotation.y -= 0.005;
    // boxRef.current.rotation.z += 0.01;
  });

  // Create matcap material
  const matcap = useTexture(matcapDarkPink);

  // Have to use @ts-ignore because drei does not have TS types.
  // @ts-ignore
  const { nodes } = useGLTF("./src/assets/cat-sitting.gltf");
  console.log(nodes);
  return (
    <mesh
      geometry={nodes.cat2Plane_group42.geometry}
      scale={0.25}
      castShadow
      receiveShadow
      ref={ref}
    >
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
}
useGLTF.preload("./src/assets/cat-sitting.gltf");
export default CatSitting;
