import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutCoin = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="coin-wrapper flex items-center 
      h-[300px] w-[300px]
      sm:h-[600px] sm:w-[600px]
      rounded-full"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* FRONT OF 'COIN' */}
      <motion.img
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          transition: { type: "spring", duration: 1 },
        }}
        alt="an photograph of a girl with long brown hair and glasses, smiling with confidence"
        src="/photos/outside-1.jpeg"
        className="rounded-full md:float-left 
        h-[300px] w-[300px]
        max-h-[600px] sm:h-[600px] sm:w-[600px]
        border-rose-900 border-4 
        coin"
      />

      {/* BACK OF 'COIN' */}
      <motion.img
        initial={false}
        animate={{
          rotateY: isFlipped ? 0 : -180,
          transition: { type: "spring", duration: 1 },
        }}
        alt="an anime drawing of a girl with long brown hair and glasses, smiling with confidence"
        src="/portrait-square-95.webp"
        className="rounded-full md:float-left 
        h-[300px] w-[300px]
        max-h-[600px] sm:h-[600px] sm:w-[600px]
         border-rose-900 border-4 
        coin"
      />
    </motion.div>
  );
};

export default AboutCoin;
