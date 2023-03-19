import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { projects } from "./projectData";
import MoreProjectsComingSoon from "./MoreProjectsComingSoon";
import SingleProject from "./SingleProject";

function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-10 text-center lg:px-40">
        <div className="flex flex-col items-center">
          <HiOutlineCode className="text-3xl dark:text-emerald-50 text-emerald-600" />
          <h2 className="text-2xl text-emerald-600 dark:text-emerald-50 font-frag font-bold">
            Apps I've built
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            // for 'odd' projects, reverse the flex direction
            <SingleProject key={project.title} project={project} />
          ))}
          <MoreProjectsComingSoon />
        </div>
      </div>
    </section>
  );
}

export default Projects;
