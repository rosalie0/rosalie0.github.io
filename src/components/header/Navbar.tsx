import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Navbar = ({ offsetHeight }: { offsetHeight: number }) => {
  // A piece of state that uses an eventListener to see if we are at scrollY of 0
  const [userAtTop, setUserAtTop] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    currPos.y === 0 ? setUserAtTop(true) : setUserAtTop(false);
  });

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
  const hoverStyles = "hover:text-amber-600 dark:hover:text-amber-200";

  return (
    <div className={notActiveLinkStyles} style={navbarStyle}>
      <Link
        to="about"
        className={userAtTop ? activeLinkStyles + hoverStyles : hoverStyles}
        activeClass={activeLinkStyles}
        smooth={true}
        offset={offsetHeight}
        isDynamic={true}
        spy={true}
      >
        {"<"}about{">"}
      </Link>

      <Link
        to="timeline"
        className={hoverStyles}
        activeClass={activeLinkStyles}
        smooth={true}
        offset={offsetHeight}
        isDynamic={true}
        spy={true}
      >
        {"<"}timeline{">"}
      </Link>

      <Link
        to="projects"
        className={hoverStyles}
        activeClass={activeLinkStyles}
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
