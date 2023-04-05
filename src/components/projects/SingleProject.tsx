import React from "react";
import { Project } from "./projectData";
import SingleProjectButtons from "./SingleProjectButtons";

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div
      //      md:flex-row md:odd:flex-row-reverse md:p-2

      className="flex flex-col gap-2 items-center  justify-center
    border-solid border-2 rounded-lg 
     dark:border-emerald-50 border-emerald-900 
     
     text-rose-900 dark:text-emerald-100
      dark:bg-emerald-900/50 bg-emerald-50/75
      hover:bg-emerald-50 shadow-md
      w-[400px]"
    >
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
          <ul className="flex gap-x-0 gap-y  flex-wrap justify-center">
            {project.techStack.map((skill, index) => (
              <li key={index} className="italic px-2 ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <p className="whitespace-pre-wrap font-source text-md leading-snug text-left">
          {project.description}
        </p>
        {project.note && <p className="font-source italic ">*{project.note}</p>}
        <SingleProjectButtons project={project} />
      </div>
    </div>
  );
};

export default SingleProject;
