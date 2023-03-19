import React from "react";
import { Project } from "./projectData";
import { FiArrowRight } from "react-icons/fi";

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row md:p-2 gap-2 items-center md:odd:flex-row-reverse border-solid border-2 dark:border-emerald-50 border-emerald-600 rounded-lg text-rose-900 dark:text-emerald-100 dark:bg-emerald-900/50 bg-emerald-50/75 hover:bg-emerald-50 shadow-md">
      <img
        className="rounded-md"
        width={"500px"}
        src={project.image}
        alt="Screenshot previewing the web app"
      />
      <div className="p-2 md:p-2 project-info">
        <h4 className="font-frag text-2xl">{project.title}</h4>
        <h5 className="font-frag">{project.subtitle}</h5>
        <p className="whitespace-pre-wrap font-source text-md leading-snug text-left">
          {project.description}
        </p>

        <div
          className="project-button-container mt-1 flex  gap-4 justify-center
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
  );
};

export default SingleProject;
