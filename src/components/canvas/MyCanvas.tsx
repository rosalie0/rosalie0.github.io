import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Cube from "./Cube";
import PlasticCube from "./PlasticCube";

function MyCanvas() {
  return (
    <div style={{ height: "900px", width: "900px", backgroundColor: "pink" }}>
      <Canvas camera={{ position: [10, 10, -5], fov: 75 }}>
        <Suspense fallback={null}>
          {/* <Cube /> */}
          <PlasticCube />
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyCanvas;
