import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Project } from "./projectData";

const SingleProjectButtons = ({ project }: { project: Project }) => {
  const deployAriaLabel = `Link to the project: ${project.title} deploy website`;
  const githubAriaLabel = `Link to the project: ${project.title} github repository`;
  const videoAriaLabel = `Link to a video about the project: ${project.title}`;

  return (
    <div className="mt-1 mb-2 flex flex-wrap gap-4 justify-center">
      {/* Deploy Link */}
      {project.deployLink && (
        <a
          href={project.deployLink}
          target="_blank"
          aria-labelledby={deployAriaLabel}
        >
          <button
            id="deploy Link"
            className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1"
          >
            Deploy <FiArrowRight />
          </button>
        </a>
      )}

      {/* Github Link */}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          aria-labelledby={githubAriaLabel}
        >
          <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
            Github <FiArrowRight />
          </button>
        </a>
      )}

      {/* Video Link */}
      {project.videoLink && (
        <a
          href={project.videoLink}
          target="_blank"
          aria-labelledby={videoAriaLabel}
        >
          <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
            Presentation Video <FiArrowRight />
          </button>
        </a>
      )}
    </div>
  );
};

export default SingleProjectButtons;
