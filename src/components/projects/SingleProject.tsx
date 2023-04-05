import React from "react";
import { Project } from "./projectData";
import SingleProjectButtons from "./SingleProjectButtons";

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div
      //      md:flex-row md:odd:flex-row-reverse md:p-2

      className="border-solid border-2 rounded-lg 
     dark:border-emerald-50 border-emerald-900 
     text-rose-900 dark:text-emerald-100
      dark:bg-emerald-900/50 bg-emerald-50/75
      hover:bg-emerald-50 shadow-md
      grid grid-cols-1 md:grid-cols-2 
      p-8 max-w-6xl
      "
    >
      {/* PROJECT IMAGE */}
      <img
        className="rounded-md mx-auto"
        src={project.image}
        alt="Screenshot previewing the web app"
      />

      {/* PROJECT TEXT INFO */}
      <div className="p-2 project-info">
        <h3 className="font-frag text-2xl">{project.title}</h3>
        <h4 className="font-frag">{project.subtitle}</h4>
        <div>
          <ul className="flex flex-wrap justify-center">
            {project.techStack.map((skill, index) => (
              <li key={index} className="italic px-2 ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-rose-900 py-2 w-10/12 mx-auto" />
        <p className="whitespace-pre-wrap font-source leading-snug text-left w-10/12 mx-auto">
          {project.description}
        </p>
        {project.note && <p className="font-source italic ">*{project.note}</p>}
        <SingleProjectButtons project={project} />
      </div>
    </div>
  );
};

export default SingleProject;
