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
        to={"/cv"}
        className={({ isActive }) =>
          isActive ? activeLinkStyles : notActiveLinkStyles
        }
      >
        {"<"}cv{">"}
      </NavLink>
      {/* <NavLink to={"/"} end className={notActiveLinkStyles}>
        return;
      </NavLink> */}
    </div>
  );
}

export default Navbar;
