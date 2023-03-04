import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";

function RouteContainer() {
  return (
    <div>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default RouteContainer;
