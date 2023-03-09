import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/header/Navbar";
import { FaCode } from "react-icons/fa";

// Components:
import RouteContainer from "./components/RouteContainer";

function App() {
  return (
    <div className="App bg-rose-50" style={{ height: "100vh" }}>
      <h1 className="text-3xl text-emerald-600 font-bold ">hello world</h1>
      <FaCode />
      <Navbar />
      <RouteContainer />
    </div>
  );
}

export default App;
