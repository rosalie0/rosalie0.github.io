import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Projects from "./Projects";

function RouteContainer() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default RouteContainer;
