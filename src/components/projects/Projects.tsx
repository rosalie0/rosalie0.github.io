import React from "react";
import { projects } from "./projectData";
function Projects() {
  console.log(projects);
  return (
    <div>
      <div>
        {projects.map((project) => (
          <div key={project.title} className="">
            <h4>{project.title}</h4>
            <a href={project.deployLink}>Deploy</a> /{" "}
            <a href={project.githubLink}>Github</a>
            <p>{project.description}</p>
            <img src={project.image} alt="Screenshot previewing the web app" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
