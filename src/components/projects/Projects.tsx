import React from "react";
import { FaCode } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

import { projects } from "./projectData";
function Projects() {
  console.log(projects);
  return (
    <section id="projects">
      <div className="container px-5 py-10 text-center lg:px-40">
        <div className="flex flex-col items-center">
          <HiOutlineCode className="text-3xl text-emerald-600" />
          <h2 className="text-2xl text-emerald-600 dark:text-emerald-50 font-frag font-bold">
            Apps I've built
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            // for 'odd' projects, reverse the flex direction
            <div
              key={project.title}
              className="flex flex-col md:flex-row p-2 gap-2 items-center md:odd:flex-row-reverse border-solid border-2 border-emerald-600 rounded-lg text-rose-900 bg-emerald-50/75 hover:bg-emerald-50"
            >
              <img
                width={"500px"}
                src={project.image}
                alt="Screenshot previewing the web app"
              />
              <div className="project-info">
                <h4 className="font-frag text-2xl">{project.title}</h4>
                <h5 className="font-frag">{project.subtitle}</h5>
                <p className="whitespace-pre-wrap font-source text-md leading-snug text-left">
                  {project.description}
                </p>

                <div
                  className="project-button-container mt-1 flex flex-wrap gap-4 justify-center
                "
                >
                  <a href={project.deployLink}>
                    <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
                      Deploy <FiArrowRight />
                    </button>
                  </a>
                  <a href={project.githubLink}>
                    <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
                      Github <FiArrowRight />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
