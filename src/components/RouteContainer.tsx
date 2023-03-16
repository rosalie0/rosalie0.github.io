import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Art from "./Art";
import Contact from "./Contact";
import Error from "./Error";
import Homepage from "./Homepage";
import Projects from "./projects/Projects";
import CVContainer from "./cv/CVContainer";

function RouteContainer() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />

      <Route path="/art" element={<Art />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/cv" element={<CVContainer />} />

      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RouteContainer;
