import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutCoin = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontCoinYValue = isFlipped ? 180 : 0;
  const backCoinYValue = isFlipped ? 0 : -180;

  // Note:
  // Q:How to swap what is front and back?
  // Just change the rotateY value to frontCoinYValue / backCoinYValue
  // in the motion.img's animate prop's object.
  return (
    <motion.div
      className="coin-wrapper flex items-center 
      h-[300px] w-[300px]
      sm:h-[600px] sm:w-[600px]
      rounded-full"
      onHoverStart={() => setIsFlipped(!isFlipped)} // when hover starts, flip it once.
      onHoverEnd={() => setIsFlipped(!isFlipped)} // when hover ends, flip it once.
      onClick={() => setIsFlipped(!isFlipped)} // also allow flipping with click
    >
      {/* FRONT OF 'COIN' */}
      <motion.img
        initial={false}
        animate={{
          rotateY: backCoinYValue,
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
          rotateY: frontCoinYValue,
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
