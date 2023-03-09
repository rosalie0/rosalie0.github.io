import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Art from "./Art";
import Error from "./Error";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Resume from "./Resume";

function RouteContainer() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />

      <Route path="/art" element={<Art />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />

      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RouteContainer;
