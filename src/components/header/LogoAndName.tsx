import React from "react";
import greenCatIcon from "../../assets/cat-green-small.png";
const LogoAndName = () => {
  return (
    <div className="flex gap-2 items-center pl-4">
      <img src={greenCatIcon} className="h-10" />
      <h1 className="text-[2rem] font-neon text-emerald-600 font-bold">
        rose newman
      </h1>
    </div>
  );
};

export default LogoAndName;
