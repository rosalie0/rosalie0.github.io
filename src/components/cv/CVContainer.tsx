import React from "react";
import CV from "./CV";
import pdf from "../../assets/resume.pdf";

function CVContainer() {
  return (
    <div className="container flex flex-col items-center">
      <CV />
      <a href={pdf} target="_blank">
        open in new window
      </a>
    </div>
  );
}

export default CVContainer;
