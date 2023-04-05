import React from "react";
import { Project } from "./projectData";
import SingleProjectButtons from "./SingleProjectButtons";

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div
      className="border-solid border-2 rounded-lg
      border-rose-100 dark:border-none
      text-emerald-900 dark:text-stone-200
      bg-white/75 dark:bg-stone-800
     shadow-md
      grid grid-cols-1 lg:grid-cols-2 
      items-center gap-5
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
      <div className="p-5 project-info">
        <h3 className="font-frag text-2xl">{project.title}</h3>
        <h4 className="font-frag">{project.subtitle}</h4>
        <div>
          <ul className="flex flex-wrap justify-center pb-2">
            {project.techStack.map((skill, index) => (
              <li key={index} className="italic px-2 ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <hr
          className="border-rose-900 dark:border-stone-200
        py-2 w-12/12 mx-auto"
        />
        <p className="whitespace-pre-wrap font-source leading-snug text-left w-12/12 mx-auto">
          {project.description}
        </p>
        <SingleProjectButtons project={project} />
        {project.note && <p className="font-source italic ">*{project.note}</p>}
      </div>
    </div>
  );
};

export default SingleProject;
