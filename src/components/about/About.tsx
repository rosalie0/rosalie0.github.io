import React from "react";
import { Element } from "react-scroll";
import AboutHeading from "./AboutHeading";
import AboutParagraphs from "./AboutParagraphs";
import AboutDrawing from "./AboutDrawing";
import AboutPhoto from "./AboutPhoto";
import { motion } from "framer-motion";

function About() {
  //flex flex-col lg:flex-row
  return (
    <Element
      name="about"
      className="grid grid-cols-1 xl:grid-cols-2
      gap-4 justify-items-center items-center p-12 container"
    >
      <AboutPhoto />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
        className="flex flex-col items-center md:items-start gap-4 p-4"
      >
        <AboutHeading />
        <AboutParagraphs />
      </motion.div>
    </Element>
  );
}

export default About;
