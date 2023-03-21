import React from "react";
import { Stage } from "@react-three/drei";
import Cat from "./Cat";
import { Environment } from "@react-three/drei";
import studio from "../../assets/studio_small_03_1k_LOWRES.png?url";

const StageForCat = () => {
  return (
    <Stage
      // environment={{ files: studio }}
      //environment={{ files: "/studio_small_03_1k_LOWRES.png" }}
      //environment={undefined}
      environment={undefined}
      adjustCamera={true}
      // shadows={{ type: "contact", offset: 1 }}
    >
      {/* <Cat /> */}
    </Stage>
  );
};

export default StageForCat;
