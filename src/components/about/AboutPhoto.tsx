import React from "react";

const AboutPhoto = () => {
  /* different paths to copy paste in, to see which i like more ->
      src="/photos/outside-1.jpeg"
      src="/photos/outside-2.jpeg"
      
      src="/photos/inside-1.jpg"
      src="/photos/inside-2.jpg"
      src="/photos/inside-3.jpg"

      todo: whichever is chosen, preload it in the index.html
  */
  return (
    <img
      alt="an photograph of a girl with long brown hair and glasses, smiling with confidence"
      src="/photos/outside-1.jpeg"
      // src="/photos/inside-3.jpg"
      className="rounded-full md:float-left max-h-[600px] h-auto border-rose-900 border-4 "
    />
  );
};

export default AboutPhoto;
