import React from "react";
import SocialIcons from "./SocialIcons";

const SocialsContainerForCanvas = () => {
  const positioning = {
    right: 0,
    bottom: 0,
    zIndex: "1",
  };
  return (
    <div className="mb-4 mr-4 absolute" style={positioning}>
      <h5 className="font-neon text-lg  text-emerald-900 dark:text-emerald-100">
        let's connect!
      </h5>
      <SocialIcons />
    </div>
  );
};

export default SocialsContainerForCanvas;
