import { Backdrop, OrbitControls } from "@react-three/drei";
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
        <OrbitControls />
        <Suspense fallback={null}>
          <Backdrop
            receiveShadow
            roughness={10}
            scale={[50, 20, 30]}
            position={[0, -2, 0]}
            rotation={[0, degreesToRadians(90), 0]}
            floor={0.25}
            segments={20}
          >
            <meshStandardMaterial color="#353540" />
          </Backdrop>
          {/* <Cube /> */}
          <PlasticCube />

          <Cat />
          {/* <ambientLight intensity={0.25} /> */}
          <pointLight intensity={2} position={[5, 7, 10]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyCanvas;
