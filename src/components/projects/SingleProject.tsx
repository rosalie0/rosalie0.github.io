import React from "react";
import { Project } from "./projectData";
import SingleProjectButtons from "./SingleProjectButtons";

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row md:p-2 gap-2 items-center md:odd:flex-row-reverse border-solid border-2 dark:border-emerald-50 border-emerald-900 rounded-lg text-rose-900 dark:text-emerald-100 dark:bg-emerald-900/50 bg-emerald-50/75 hover:bg-emerald-50 shadow-md">
      <img
        className="rounded-md"
        width={"500px"}
        src={project.image}
        alt="Screenshot previewing the web app"
      />

      <div className="p-2 md:p-2 project-info">
        <h3 className="font-frag text-2xl">{project.title}</h3>
        <h4 className="font-frag">{project.subtitle}</h4>
        <div>
          <ul>
            {project.techStack.map((skill) => (
              <li className="italic">{skill}</li>
            ))}
          </ul>
        </div>
        <p className="whitespace-pre-wrap font-source text-md leading-snug text-left">
          {project.description}
        </p>
        {project.note && <p className="font-source italic">*{project.note}</p>}
        <SingleProjectButtons project={project} />
      </div>
    </div>
  );
};

export default SingleProject;
