import React from "react";
import { SlEmotsmile } from "react-icons/sl";
import { FaRegSmileWink } from "react-icons/fa";
import { IconContext } from "react-icons";

const MoreProjectsComingSoon = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-1 p-4 text-3xl text-emerald-600 dark:text-emerald-100 font-frag font-bold">
      <h5>
        ...and more coming soon!
        <IconContext.Provider
          value={{
            className: "inline pb-1",
            //@ts-ignore
            title: "a wingling smiley face icon",
          }}
        >
          <FaRegSmileWink />
        </IconContext.Provider>
      </h5>
    </div>
  );
};

export default MoreProjectsComingSoon;
