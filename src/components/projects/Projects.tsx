import React from "react";
import { projects } from "./projectData";
function Projects() {
  console.log(projects);
  return (
    <div>
      <div>
        {projects.map((project) => (
          <div key={project.title} className="">
            <h4>Project is called {project.title}</h4>
            <a href={project.deployLink}>Deploy</a>
            <a href={project.githubLink}>Github</a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      projects go here
    </div>
  );
}

export default Projects;
