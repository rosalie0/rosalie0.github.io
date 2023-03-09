import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
  };
  return (
    <div className="navbar" style={navbarStyle}>
      <h3>Rosalie Newman</h3>
      <Link to={"/about"}>about</Link>
      <Link to={"/projects"}>projects</Link>
      <Link to={"/art"}>art</Link>
      <Link to={"/resume"}>resume</Link>
    </div>
  );
}

export default Navbar;
