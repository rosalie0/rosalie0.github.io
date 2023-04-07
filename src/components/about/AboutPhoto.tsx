import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutPhoto = () => {
  /* different paths to copy paste in, to see which i like more ->
      src="/photos/outside-1.jpeg"
      src="/photos/outside-2.jpeg"
    
      src="/photos/inside-1.jpg"
      src="/photos/inside-2.jpg"
      src="/photos/inside-3.jpg"

      todo: whichever is chosen, preload it in the index.html
  */

  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.25,
          duration: 1.5,
          type: "spring",
          bounce: 0.6,
        },
      }}
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

      {/* BACK OF 'CARD' */}
      <motion.img
        initial={false}
        animate={{
          rotateY: isFlipped ? 0 : -180,
          transition: { type: "spring", duration: 1 },
        }}
        alt="an photograph of a girl with long brown hair and glasses, smiling with confidence"
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

export default AboutPhoto;
