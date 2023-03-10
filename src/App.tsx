import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { FaCode } from "react-icons/fa";

// Components:
import RouteContainer from "./components/RouteContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App bg-rose-50" style={{ height: "100vh" }}>
      <FaCode />
      <Header />
      <RouteContainer />
    </div>
  );
}

export default App;
