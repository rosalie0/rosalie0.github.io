import { Backdrop, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cat from "./Cat";
import PinkBackdrop from "./PinkBackdrop";

function MyCanvas() {
  return (
    <div style={{ height: "95vh", width: "100%", backgroundColor: "pink" }}>
      <Canvas
        resize={{ scroll: false }}
        camera={{ position: [7.5, -1, 0], fov: 75 }}
      >
        <Suspense fallback={null}>
          <Stage
            // environment={"studio"}
            adjustCamera={true}
            shadows={{ type: "contact", offset: 1 }}
          >
            <Cat />
          </Stage>

          {/* <PinkBackdrop /> */}
          <pointLight color={"red"} intensity={2} position={[3, 3, 3]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyCanvas;
