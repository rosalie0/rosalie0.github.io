import React from "react";
import ComingSoon from "../utils/ComingSoon";

function About() {
  return (
    <section id="about">
      <div className="flex flex-col gap-4 p-4 items-center  md:flex-row">
        <img src="https://placekitten.com/400/400" className="rounded-full" />
        <div className="flex flex-col items-center md:items-start gap-4 p-4">
          <h2 className="font-frag font-bold text-2xl text-rose-900">
            Who is 「Rose」?
          </h2>
          <div className="text-base text-rose-900">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut
              ornare lectus sit amet est placerat. Elementum tempus egestas sed
              sed. Dignissim enim sit amet venenatis. Nullam vehicula ipsum a
              arcu cursus vitae congue. Volutpat odio facilisis mauris sit amet
              massa.
            </p>
            <p>
              Maecenas accumsan lacus vel facilisis volutpat est velit egestas.
              Enim nunc faucibus a pellentesque. Nam libero justo laoreet sit
              amet cursus sit amet dictum. Commodo odio aenean sed adipiscing
              diam donec adipiscing tristique risus. Duis tristique sollicitudin
              nibh sit. Eu feugiat pretium nibh ipsum consequat nisl. Viverra
              tellus in hac habitasse platea dictumst vestibulum. Enim sed
              faucibus turpis in eu mi bibendum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // return (

  // );
}

export default About;
