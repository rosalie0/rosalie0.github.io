import React from "react";
import CV from "./CV";
import pdf from "../../assets/resume.pdf";
import { FiArrowRight } from "react-icons/fi";

function CVContainer() {
  return (
    <div className="container flex flex-col items-center">
      <CV />
      <a href={pdf} target="_blank">
        <button className="rounded-md p-1 text-rose-50 bg-amber-600 hover:bg-amber-700 flex items-center gap-1">
          open in new window <FiArrowRight />
        </button>
      </a>
    </div>
  );
}

export default CVContainer;
