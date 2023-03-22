import React from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const MoreProjectsComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1.5 }, // animation for whileInView lasts 0.5 second
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-center p-4 text-3xl text-emerald-900 dark:text-emerald-100 font-frag font-bold"
    >
      <h5>
        ...and more coming soon!
        <IconContext.Provider value={{ className: "inline pb-1" }}>
          <FaRegSmileWink />
        </IconContext.Provider>
      </h5>
    </motion.div>
  );
};

export default MoreProjectsComingSoon;
