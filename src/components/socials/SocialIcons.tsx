import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SocialIcons = () => {
  // Todo: accessbility
  /* Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users.
   */
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/rosalie0"
        target="_blank"
        aria-label="Rosalie's Github profile"
      >
        <FiGithub className="text-emerald-900 hover:text-emerald-700 dark:text-emerald-100 text-6xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/rosalie-newman-rn/"
        target="_blank"
        aria-label="Rosalie's Linkedin profile"
      >
        <FiLinkedin className="text-emerald-900  hover:text-emerald-700 dark:text-emerald-100 text-6xl" />
      </a>
      <a
        href="mailto:rosalienewman0@gmail.com"
        target="_blank"
        aria-label="email Rosalie"
      >
        <FiMail className="text-emerald-900  hover:text-emerald-700 dark:text-emerald-100 text-6xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
