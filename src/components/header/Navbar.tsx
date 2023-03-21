import React, { useEffect, useState } from "react";
// ES6 Imports
import { Link } from "react-scroll";
import scrollListen from "../utils/scrollListen";

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
    "font-frag text-emerald-900 dark:text-emerald-200 cursor-pointer";

  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [projectsIsActive, setProjectsIsActive] = useState(false);
  const [contactIsActive, setContactIsActive] = useState(false);

  const hoverStyles = "hover:text-amber-600 dark:hover:text-amber-200";

  // Get user scroll position via custom hook
  const scrollPosition = scrollListen();
  const userAtTop = scrollPosition === 0;
  return (
    <div className={notActiveLinkStyles} style={navbarStyle}>
      <Link
        to="about"
        className={userAtTop ? activeLinkStyles + hoverStyles : hoverStyles}
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
        className={hoverStyles}
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
        className={hoverStyles}
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
