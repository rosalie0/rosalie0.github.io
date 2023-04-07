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
      className="coin-wrapper"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* FRONT OF 'COIN' */}
      <motion.img
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          transition: { type: "spring", duration: 1 },
        }}
        //onHoverEnd={{ rotateY: 90, transition: { type: "tween", duration: 3 } }}
        alt="an photograph of a girl with long brown hair and glasses, smiling with confidence"
        src="/photos/outside-1.jpeg"
        className="rounded-full md:float-left 
        max-h-[600px] h-auto w-auto
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
        // src="/photos/inside-3.jpg"
        className="rounded-full md:float-left max-h-[600px] h-auto w-auto border-rose-900 border-4 
        coin"
      />
    </motion.div>
  );
};

export default AboutPhoto;
