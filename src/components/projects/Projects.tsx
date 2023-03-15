import React from "react";
import { FaCode } from "react-icons/fa";
import { projects } from "./projectData";
function Projects() {
  console.log(projects);
  return (
    <section id="projects">
      <div>
        <div className="flex items-center">
          <FaCode />
          <h2>Apps I've built</h2>
        </div>
        <div className="container">
          {projects.map((project) => (
            <div key={project.title} className="">
              <h4>{project.title}</h4>
              <h5>{project.subtitle}</h5>

              <div className="flex flex-wrap">
                <a href={project.deployLink}>
                  <button>Deploy</button>
                </a>
                <a href={project.githubLink}>
                  <button className="rounded-md bg-primary">Github</button>
                </a>
              </div>
              <p>{project.description}</p>
              <img
                src={project.image}
                alt="Screenshot previewing the web app"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
