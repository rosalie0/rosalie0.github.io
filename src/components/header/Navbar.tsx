import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "yellow",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };

  const activeLinkStyles = "navLink text-violet-500 cursor-default";
  const notActiveLinkStyles = "navLink text-sky-500 hover:text-sky-300";

  return (
    <div className="navbar" style={navbarStyle}>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? activeLinkStyles : notActiveLinkStyles
        }
      >
        {"<"}about{">"}
      </NavLink>
      <NavLink
        to={"/projects"}
        className={({ isActive }) =>
          isActive ? activeLinkStyles : notActiveLinkStyles
        }
      >
        {"<"}projects{">"}
      </NavLink>
      <NavLink
        to={"/art"}
        className={({ isActive }) =>
          isActive ? activeLinkStyles : notActiveLinkStyles
        }
      >
        {"<"}art{">"}
      </NavLink>
      <NavLink
        to={"/resume"}
        className={({ isActive }) =>
          isActive ? activeLinkStyles : notActiveLinkStyles
        }
      >
        {"<"}cv{">"}
      </NavLink>
      <NavLink to={"/"} end className={notActiveLinkStyles}>
        return;
      </NavLink>
    </div>
  );
}

export default Navbar;
