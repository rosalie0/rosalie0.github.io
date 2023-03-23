import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Project } from "./projectData";

const SingleProjectButtons = ({ project }: { project: Project }) => {
  return (
    <div className="mt-1 mb-2 flex flex-wrap gap-4 justify-center">
      {/* Deploy Link */}
      {project.deployLink && (
        <a href={project.deployLink} target="_blank">
          <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
            Deploy <FiArrowRight />
          </button>
        </a>
      )}

      {/* Github Link */}
      {project.githubLink && (
        <a href={project.githubLink} target="_blank">
          <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
            Github <FiArrowRight />
          </button>
        </a>
      )}

      {/* Video Link */}
      {project.videoLink && (
        <a href={project.videoLink} target="_blank">
          <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
            Presentation Video <FiArrowRight />
          </button>
        </a>
      )}
    </div>
  );
};

export default SingleProjectButtons;
