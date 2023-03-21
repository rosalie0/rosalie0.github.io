import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// ES6 Imports
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
interface Props {
  offsetHeight: number;
}
const Navbar = ({ offsetHeight }: Props) => {
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
    "font-frag text-emerald-900 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100 cursor-pointer";

  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [projectsIsActive, setProjectsIsActive] = useState(false);
  const [contactIsActive, setContactIsActive] = useState(false);

  return (
    <div className={notActiveLinkStyles} style={navbarStyle}>
      <Link
        to="about"
        activeClass={activeLinkStyles}
        // className={aboutIsActive ? activeLinkStyles : notActiveLinkStyles}
        // onClick={() => {
        //   setContactIsActive(false);
        //   setAboutIsActive(true);
        //   setProjectsIsActive(false);
        // }}
        // onSetActive={() => setAboutIsActive(true)}
        // onSetInactive={() => setAboutIsActive(false)}
        smooth={true}
        offset={offsetHeight}
        isDynamic={true}
        spy={true}
      >
        {"<"}about{">"}
      </Link>

      <Link
        to="projects"
        activeClass={activeLinkStyles}
        // className={projectsIsActive ? activeLinkStyles : notActiveLinkStyles}
        // onClick={() => {
        //   setContactIsActive(false);
        //   setAboutIsActive(false);
        //   setProjectsIsActive(true);
        // }}
        // onSetActive={() => setProjectsIsActive(true)}
        // onSetInactive={() => setProjectsIsActive(false)}
        smooth={true}
        offset={offsetHeight}
        isDynamic={true}
        spy={true}
      >
        {"<"}projects{">"}
      </Link>

      <Link
        to="contact"
        activeClass={activeLinkStyles}
        // className={contactIsActive ? activeLinkStyles : notActiveLinkStyles}
        // onClick={() => {
        //   setContactIsActive(true);
        //   setAboutIsActive(false);
        //   setProjectsIsActive(false);
        // }}
        // onSetActive={() => setContactIsActive(true)}
        // onSetInactive={() => setContactIsActive(false)}
        smooth={true}
        offset={offsetHeight}
        isDynamic={true}
        spy={true}
      >
        {"<"}contact{">"}
      </Link>
    </div>
  );
};

export default Navbar;
