import React from "react";
import SocialIcons from "./SocialIcons";

const SocialsContainerForCanvas = () => {
  const positioning = {
    right: 0,
    bottom: 0,
    zIndex: "1",
  };
  return (
    <div
      className="mb-4 mr-4 absolute flex flex-col items-center"
      style={positioning}
    >
      <h2 className="font-neon text-3xl  text-emerald-900 dark:text-emerald-100">
        let's connect!
      </h2>
      <SocialIcons />
    </div>
  );
};

export default SocialsContainerForCanvas;
