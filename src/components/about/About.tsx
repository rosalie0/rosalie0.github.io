import React from "react";
import { Element } from "react-scroll";
import AboutHeading from "./AboutHeading";
import AboutParagraphs from "./AboutParagraphs";
import portrait from "../../assets/portrait-square-95.webp";

function About() {
  return (
    <Element
      name="about"
      className="flex flex-col gap-4 items-center lg:flex-row container p-4 lg:p-20"
    >
      <img
        src={portrait}
        className="rounded-full md:float-left max-h-100% h-auto"
        // todo: give ti height/width value to reduce how content moves around on slow loading
        // but need to have it reflect with responsive design
        // height={"600px"}
        // width={"600px"}
      />
      <div className="flex flex-col items-center md:items-start gap-4 p-4">
        <AboutHeading />
        <AboutParagraphs />
      </div>
    </Element>
  );
}

export default About;
