import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

// Components:
import RouteContainer from "./components/RouteContainer";

function App() {
  return (
    <div className="App bg-rose-50" style={{ height: "100vh" }}>
      <h1 className="text-3xl text-emerald-600 font-bold ">hello world</h1>
      <FontAwesomeIcon icon={faCode} />

      <Navbar />
      <RouteContainer />
    </div>
  );
}

export default App;
