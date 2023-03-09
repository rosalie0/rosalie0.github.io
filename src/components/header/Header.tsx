import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex justify-between">
      <h3 className="text-xl text-emerald-600">Rosalie Newman</h3>
      <Navbar />
    </div>
  );
}

export default Header;
