import React from "react";
import { Backdrop } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

const PinkBackdrop = () => {
  return (
    <Backdrop
      receiveShadow
      castShadow
      floor={5}
      rotation={[0, degToRad(90), 0]}
      position={[-3, -8, -10]}
      scale={[70, 25, 4]}
    >
      <meshStandardMaterial color="#F472B6" />
    </Backdrop>
  );
};

export default PinkBackdrop;
