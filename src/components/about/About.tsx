import React from "react";
import { Element } from "react-scroll";
import AboutHeading from "./AboutHeading";
import AboutParagraphs from "./AboutParagraphs";

function About() {
  return (
    <Element
      name="about"
      className="flex flex-col gap-4 items-center lg:flex-row container p-4 lg:p-20"
    >
      <img
        alt="an anime drawing of a girl with long brown hair and glasses, smiling with confidence"
        src="/portrait-square-95.webp"
        className="rounded-full md:float-left max-h-100% h-auto"
      />
      <div className="flex flex-col items-center md:items-start gap-4 p-4">
        <AboutHeading />
        <AboutParagraphs />
      </div>
    </Element>
  );
}

export default About;
