import React from "react";
import { projects } from "./projectData";
import MoreProjectsComingSoon from "./MoreProjectsComingSoon";
import SingleProject from "./SingleProject";
import IntroToProjects from "./IntroToProjects";
import { Element } from "react-scroll";

function Projects() {
  return (
    <Element name="projects">
      <div className="px-5 text-center container">
        <IntroToProjects />

        <div className="flex flex-wrap justify-around gap-4">
          {projects.map((project) => (
            // for 'odd' projects, reverse the flex direction
            <SingleProject key={project.title} project={project} />
          ))}
        </div>
        <MoreProjectsComingSoon />
      </div>
    </Element>
  );
}

export default Projects;
