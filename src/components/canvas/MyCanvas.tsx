import { Backdrop } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Cat from "./Cat";
import CatSitting from "./CatSitting";
import Cube from "./Cube";
import { degreesToRadians } from "./helper";
import PlasticCube from "./PlasticCube";

function MyCanvas() {
  return (
    <div style={{ height: "900px", width: "900px", backgroundColor: "pink" }}>
      <Canvas camera={{ position: [15, 5, 0], fov: 75 }}>
        <Suspense fallback={null}>
          <Backdrop
            receiveShadow
            scale={[20, 20, 20]}
            position={[0, 0, 0]}
            rotation={[0, degreesToRadians(90), 0]}
            floor={0.25}
            segments={20}
          >
            <meshStandardMaterial color="#353540" />
          </Backdrop>
          {/* <Cube /> */}
          {/* <PlasticCube /> */}
          <Cat />
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyCanvas;
