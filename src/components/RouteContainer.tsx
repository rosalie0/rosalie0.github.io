import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about/About";
import Art from "./Art";
import Error from "./Error";
import Homepage from "./Homepage";
import Projects from "./projects/Projects";
import CVContainer from "./cv/CVContainer";

function RouteContainer() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/art" element={<Art />} />
      <Route path="/cv" element={<CVContainer />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RouteContainer;
