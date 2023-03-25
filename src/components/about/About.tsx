import React from "react";
import { Element } from "react-scroll";
import ComingSoon from "../utils/ComingSoon";
import AboutHeading from "./AboutHeading";
import AboutParagraphs from "./AboutParagraphs";

function About() {
  return (
    <Element
      name="about"
      className="flex flex-col gap-4 items-center lg:flex-row container p-4 lg:p-20"
    >
      <img
        src="https://placekitten.com/600"
        // h-[350px] md:h-full
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
