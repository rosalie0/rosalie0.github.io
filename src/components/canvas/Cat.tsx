import React from "react";
import matcapYellow from "../../assets/matcap_plastic_yellow.jpg";
import matcapMint from "../../assets/matcap_plastic_mint.jpg";
import matcapMagenta from "../../assets/matcap_plastic_magenta.jpg";
import matcapDarkPink from "../../assets/matcap_dark_pink.png";

//import catGLTF from "../../assets/cat.gltf";
// import * as c from "public/cat.gltf";

import {
  useTexture,
  useGLTF,
  MeshWobbleMaterial,
  Float,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

function Cat() {
  // Create matcap material
  const matcap = useTexture(matcapYellow);

  // Have to use @ts-ignore because drei does not have TS types.
  // @ts-ignore
  const { nodes } = useGLTF("/cat.gltf");

  return (
    <Float
      floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh
        geometry={nodes.ORIGAMI_Chat.geometry}
        scale={0.1}
        castShadow
        position={[0, 1, 0]}
        rotation={[0, degToRad(150), 0]}
      >
        {/* <meshLambertMaterial /> */}
        {/* <meshMatcapMaterial matcap={matcap} /> */}
        <MeshWobbleMaterial color={"black"} factor={0.05} speed={1} />
      </mesh>
    </Float>
  );
}
useGLTF.preload("/cat.gltf");
export default Cat;
