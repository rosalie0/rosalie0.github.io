import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/rosalie0" target="_blank">
        <FiGithub className="text-emerald-900 hover:text-emerald-700 dark:text-emerald-100 text-6xl" />
      </a>
      <a href="https://www.linkedin.com/in/rosalie-newman-rn/" target="_blank">
        <FiLinkedin className="text-emerald-900  hover:text-emerald-700 dark:text-emerald-100 text-6xl" />
      </a>
      <a href="mailto:rosalienewman0@gmail.com" target="_blank">
        <FiMail className="text-emerald-900  hover:text-emerald-700 dark:text-emerald-100 text-6xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
