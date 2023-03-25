import React from "react";
import { HiOutlineCode } from "react-icons/hi";

const IntroToProjects = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <HiOutlineCode className="text-6xl dark:text-emerald-50 text-emerald-900" />
      <h2 className="text-4xl text-emerald-900 dark:text-emerald-50 font-frag font-bold">
        Apps I've built
      </h2>
    </div>
  );
};

export default IntroToProjects;
