import React from "react";
import { Element } from "react-scroll";
import AboutHeading from "./AboutHeading";
import AboutParagraphs from "./AboutParagraphs";
import AboutDrawing from "./AboutDrawing";
import AboutPhoto from "./AboutPhoto";

function About() {
  //flex flex-col lg:flex-row
  return (
    <Element
      name="about"
      className="grid grid-cols-1 xl:grid-cols-2
      gap-4 justify-items-center items-center p-12 container"
    >
      <AboutPhoto />

      <div className="flex flex-col items-center md:items-start gap-4 p-4">
        <AboutHeading />
        <AboutParagraphs />
      </div>
    </Element>
  );
}

export default About;
