import React from "react";
import { Element } from "react-scroll";
import AboutHeading from "./AboutHeading";
import AboutParagraphs from "./AboutParagraphs";
import AboutCoin from "./AboutCoin";
import { motion } from "framer-motion";

function About() {
  //flex flex-col lg:flex-row
  return (
    <Element
      name="about"
      className="grid grid-cols-1 xl:grid-cols-2
      gap-4 justify-items-center items-center p-12 container"
    >
      <AboutCoin />

      {/* About Text Content */}
      <motion.div className="flex flex-col items-center md:items-start gap-4 p-4">
        <AboutHeading />
        <AboutParagraphs />
      </motion.div>
    </Element>
  );
}

export default About;
