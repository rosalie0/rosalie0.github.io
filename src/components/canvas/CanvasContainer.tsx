import React from "react";
import SocialsContainer from "../SocialsContainer";
import MyCanvas from "./MyCanvas";

const CanvasContainer = () => {
  const blackSquare = {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: "200px",
    width: "200px",
    backgroundColor: "black",
    zIndex: "1",
  };
  return (
    <div style={{ position: "relative" }}>
      {/* <div style={blackSquare}></div> */}

      <SocialsContainer />
      <MyCanvas />
    </div>
  );
};

export default CanvasContainer;
