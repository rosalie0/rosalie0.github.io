import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  };
  const nameInNavbarStyle = {
    //tbd
  };
  return (
    <div className="navbar" style={navbarStyle}>
      <h3 className="text-xl text-emerald-600">Rosalie Newman</h3>
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
