import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

// Components:
import RouteContainer from "./components/RouteContainer";

function App() {
  return (
    <div className="App bg-rose-50" style={{ height: "100vh" }}>
      <h1 className="text-3xl text-emerald-600 font-bold ">hello world</h1>
      <FontAwesomeIcon icon="fa-solid fa-code" />
      <FontAwesomeIcon icon={solid("user-secret")} />

      <Navbar />
      <RouteContainer />
    </div>
  );
}

export default App;
