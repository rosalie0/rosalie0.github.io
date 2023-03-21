import React from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { IconContext } from "react-icons";

const MoreProjectsComingSoon = () => {
  return (
    <div className="text-center p-4 text-3xl text-emerald-900 dark:text-emerald-100 font-frag font-bold">
      <h5>
        ...and more coming soon!
        <IconContext.Provider value={{ className: "inline pb-1" }}>
          <FaRegSmileWink />
        </IconContext.Provider>
      </h5>
    </div>
  );
};

export default MoreProjectsComingSoon;
