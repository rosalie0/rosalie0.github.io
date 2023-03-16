import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import matcapYellow from "../../assets/matcap_plastic_yellow.jpg";
import matcapMint from "../../assets/matcap_plastic_mint.jpg";
import matcapMagenta from "../../assets/matcap_plastic_magenta.jpg";
import matcapDarkPink from "../../assets/matcap_dark_pink.png";

// import catGLTF from "../../assets/cat.gltf";
import { useTexture, useGLTF, MeshWobbleMaterial } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { degreesToRadians } from "./helper";

function Cat() {
  // Declare refs for animation here
  const ref = useRef<Mesh>(null!);

  // Rotation Animation
  useFrame(() => {
    ref.current.rotation.y -= 0.001;

    //ref.current.rotation.x -= 0.001;
    //ref.current.rotation.z += 0.0001;
  });

  // Create matcap material
  const matcap = useTexture(matcapMint);

  // Have to use @ts-ignore because drei does not have TS types.
  // @ts-ignore
  const { nodes } = useGLTF("./src/assets/cat.gltf");

  return (
    <mesh
      geometry={nodes.ORIGAMI_Chat.geometry}
      scale={0.25}
      castShadow
      ref={ref}
      rotation={[0, degreesToRadians(60), 0]}
    >
      <meshLambertMaterial />
      {/* <meshMatcapMaterial matcap={matcap} /> */}
      {/* <MeshWobbleMaterial color={"yellow"} factor={0.05} speed={2} /> */}
    </mesh>
  );
}
useGLTF.preload("./src/assets/cat.gltf");
export default Cat;
