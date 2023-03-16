import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Socials = () => {
  return (
    <>
      <h5 className="font-neon text-lg  text-emerald-600 dark:text-emerald-100">
        let's connect!
      </h5>
      <div className="flex gap-4">
        <a href="https://github.com/rosalie0">
          <FiGithub className="text-emerald-600 dark:text-emerald-100 text-6xl" />
        </a>
        <a href="https://www.linkedin.com/in/rosalie-newman-rn/">
          <FiLinkedin className="text-emerald-600 dark:text-emerald-100 text-6xl" />
        </a>
        <a href="mailto:rosalienewman0@gmail.com" target="_blank">
          <FiMail className="text-emerald-600 dark:text-emerald-100 text-6xl" />
        </a>
      </div>
    </>
  );
};

export default Socials;
