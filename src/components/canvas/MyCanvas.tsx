import {
  Backdrop,
  Environment,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Cat from "./Cat";
import CatSitting from "./CatSitting";
import Cube from "./Cube";
import { degreesToRadians } from "./helper";
import PlasticCube from "./PlasticCube";

function MyCanvas() {
  return (
    <div style={{ height: "95vh", width: "100%", backgroundColor: "pink" }}>
      <Canvas camera={{ position: [10, -1, 0], fov: 75 }}>
        <Suspense fallback={null}>
          <Stage adjustCamera={true} shadows={{ type: "contact", offset: 1 }}>
            <PresentationControls>
              <Cat />
            </PresentationControls>
          </Stage>

          <Backdrop
            receiveShadow
            castShadow
            floor={5}
            rotation={[0, degreesToRadians(90), 0]}
            position={[-3, -8, -10]}
            scale={[60, 25, 4]}
          >
            <meshStandardMaterial color="#F472B6" />
          </Backdrop>
          <pointLight color={"red"} intensity={2} position={[3, 3, 3]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyCanvas;
