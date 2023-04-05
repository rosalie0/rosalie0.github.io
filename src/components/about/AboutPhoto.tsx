import React from "react";

const AboutPhoto = () => {
  /* different paths to copy paste in, to see which i like more ->
      src="/outside-1.jpeg"
      src="/outside-2.jpeg"
      
      src="/inside-1.jpg"
      src="/inside-2.jpg"
      src="/inside-3.jpg"

  */
  return (
    <img
      alt="an photograph of a girl with long brown hair and glasses, smiling with confidence"
      src="/outside-1.jpeg"
      className="rounded-full md:float-left max-h-100% h-auto"
    />
  );
};

export default AboutPhoto;
