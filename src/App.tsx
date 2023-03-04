import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";

// Components:
import RouteContainer from "./components/RouteContainer";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Navbar />
      <RouteContainer />
    </div>
  );
}

export default App;
