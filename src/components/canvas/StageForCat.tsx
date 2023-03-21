import React from "react";
import { Stage } from "@react-three/drei";
import Cat from "./Cat";

const StageForCat = () => {
  return (
    <Stage
      //@ts-ignore
      environment={null}
      adjustCamera={true}
      // this gives puts the shadow further down:
      shadows={{ type: "contact", offset: 1 }}
    >
      <Cat />
    </Stage>
  );
};

export default StageForCat;
