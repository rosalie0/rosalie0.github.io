import React from "react";
import LogoAndName from "./LogoAndName";
import Navbar from "./Navbar";

function Header() {
  // on small screens, flex direction should be column and align items center
  return (
    <div className="flex flex-col md:flex-row items-center flex-wrap justify-between align-middle bg-violet-100">
      <LogoAndName />
      <Navbar />
    </div>
  );
}

export default Header;
