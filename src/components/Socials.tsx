import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="flex gap-2">
      <a href="https://github.com/rosalie0">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/rosalie-newman-rn/">
        <FiLinkedin />
      </a>
      <a href="mailto:rosalienewman0@gmail.com" target="_blank">
        <FiMail />
      </a>
    </div>
  );
};

export default Socials;
