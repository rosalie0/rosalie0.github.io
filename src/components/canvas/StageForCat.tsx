import React from "react";
import { Stage } from "@react-three/drei";
import Cat from "./Cat";
import { Environment } from "@react-three/drei";

const StageForCat = () => {
  return (
    <Stage
      environment={"studio"}
      adjustCamera={true}
      shadows={{ type: "contact", offset: 1 }}
    >
      <Cat />
    </Stage>
  );
};

export default StageForCat;
