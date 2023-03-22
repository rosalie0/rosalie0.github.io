import React from "react";
import SocialsContainerForCanvas from "../socials/SocialsContainerForCanvas";
import MyCanvas from "./MyCanvas";

const CanvasContainer = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* <SocialsContainerForCanvas /> */}
      <MyCanvas />
    </div>
  );
};

export default CanvasContainer;
