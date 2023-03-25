import React from "react";
import { Project } from "./projectData";
import { motion } from "framer-motion";
import SingleProjectButtons from "./SingleProjectButtons";

const SingleProject = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isEvenIndex = !(index % 2);

  return (
    <motion.div
      initial={isEvenIndex ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }, // animation for whileInView lasts 0.5 second
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col md:flex-row md:p-2 gap-2 items-center md:odd:flex-row-reverse border-solid border-2 dark:border-emerald-50 border-emerald-900 rounded-lg text-rose-900 dark:text-emerald-100 dark:bg-emerald-900/50 bg-emerald-50/75 hover:bg-emerald-50 shadow-md"
    >
      <img
        className="rounded-md"
        width={"500px"}
        src={project.image}
        alt="Screenshot previewing the web app"
      />

      <div className="p-2 md:p-2 project-info">
        <h4 className="font-frag text-2xl">{project.title}</h4>
        <h5 className="font-frag">{project.subtitle}</h5>
        <p className="whitespace-pre-wrap font-source text-md leading-snug text-left">
          {project.description}
        </p>
        <SingleProjectButtons project={project} />
      </div>
    </motion.div>
  );
};

export default SingleProject;
