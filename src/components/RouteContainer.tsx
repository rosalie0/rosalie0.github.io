import React from "react";
import { Routes, Route } from "react-router-dom";
import Art from "./Art";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Resume from "./Resume";

function RouteContainer() {
  return (
    <Routes>
      <Route path="/art" element={<Art />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />

      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default RouteContainer;
