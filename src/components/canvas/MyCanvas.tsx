import React, { Suspense } from "react";
import { PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PinkBackdrop from "./PinkBackdrop";
import StageForCat from "./StageForCat";

function MyCanvas() {
  return (
    <div style={{ height: "95vh", width: "100%", backgroundColor: "pink" }}>
      <Canvas
        resize={{ scroll: false }}
        camera={{ position: [7.5, -1, 0], fov: 75 }}
      >
        <Suspense fallback={null}>
          <StageForCat />
          {/* <PinkBackdrop /> */}
          <pointLight color={"red"} intensity={2} position={[3, 3, 3]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyCanvas;
