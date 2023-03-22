import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };

  const activeLinkStyles =
    "font-frag dark:text-amber-200 text-amber-600 cursor-default";
  const notActiveLinkStyles =
    "font-frag text-emerald-900 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100";

  return (
    <div className="navbar font-frag" style={navbarStyle}>
      <a href="#about">
        {"<"}about{">"}
      </a>

      <a href="#projects">
        {"<"}projects{">"}
      </a>

      <a href="#contact">
        {"<"}contact{">"}
      </a>
    </div>
  );
}

export default Navbar;
