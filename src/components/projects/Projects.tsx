import React from "react";
import { projects } from "./projectData";
import MoreProjectsComingSoon from "./MoreProjectsComingSoon";
import SingleProject from "./SingleProject";
import IntroToProjects from "./IntroToProjects";
import { Element } from "react-scroll";
import { motion, Variants } from "framer-motion";

function Projects() {
  return (
    <Element name="projects">
      <div className="container px-5 text-center lg:px-40">
        <IntroToProjects />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="flex flex-col gap-4"
        >
          {projects.map((project, index) => (
            // for 'odd' projects, reverse the flex direction
            <SingleProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}

          <MoreProjectsComingSoon />
        </motion.div>
      </div>
    </Element>
  );
}

export default Projects;
