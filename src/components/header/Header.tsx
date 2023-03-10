import React from "react";
import Navbar from "./Navbar";

function Header() {
  // on small screens, flex direction should be column and align items center
  return (
    <div className="flex flex-col md:flex-row items-center flex-wrap justify-between align-middle bg-violet-100">
      <h1 className="text-emerald-600 font-bold pl-4">rose newman</h1>
      <Navbar />
    </div>
  );
}

export default Header;
