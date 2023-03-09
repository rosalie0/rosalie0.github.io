import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "yellow",
  };
  const nameInNavbarStyle = {
    //tbd
  };
  return (
    <div className="navbar" style={navbarStyle}>
      <Link className=" text-sky-500 hover:text-sky-700" to={"/about"}>
        about
      </Link>
      <Link to={"/projects"}>projects</Link>
      <Link to={"/art"}>art</Link>
      <Link to={"/resume"}>resume</Link>
    </div>
  );
}

export default Navbar;
