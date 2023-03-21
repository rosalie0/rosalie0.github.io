import React from "react";
import SocialsContainer from "../socials/SocialsContainer";
import MyCanvas from "./MyCanvas";

const CanvasContainer = () => {
  return (
    <div style={{ position: "relative" }}>
      <SocialsContainer />
      <MyCanvas />
    </div>
  );
};

export default CanvasContainer;
