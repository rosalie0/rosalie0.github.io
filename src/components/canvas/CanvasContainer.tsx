import React from "react";
import SocialsContainerForCanvas from "../socials/SocialsContainerForCanvas";
import MyCanvas from "./MyCanvas";

const CanvasContainer = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="bg-gradient-to-t from-[#fec0ca] h-[200px]" />
      <SocialsContainerForCanvas />
      <MyCanvas />
    </div>
  );
};

export default CanvasContainer;
