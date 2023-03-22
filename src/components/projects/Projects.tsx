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

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            // for 'odd' projects, reverse the flex direction
            <SingleProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}

          <MoreProjectsComingSoon />
        </div>
      </div>
    </Element>
  );
}

export default Projects;
