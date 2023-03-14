import React from "react";
import { projects } from "./projectData";
function Projects() {
  console.log(projects);
  return (
    <div>
      <div>
        {projects.map((project) => (
          <p>Project is called {project.title}</p>
        ))}
      </div>
      projects go here
    </div>
  );
}

export default Projects;
