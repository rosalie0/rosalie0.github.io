import React from "react";

interface ThemeProps {
  theme: string;
  /** when passing down the state setter function returned by `useState` to a child component.
   *  `number` is an example, swap out with whatever the type of your state */
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function Footer() {
  /*
  1. The copyright symbol © or the word “copyright”
  2. The name of the copyright owner or author of the work
  3. The year the content was published, which can be different from the year of creation
  4. Your statement of the rights you’re reserving over the materials
  */
  return (
    <div
      id="footer"
      className="opacity-80 rounded-b-lg flex gap-1 flex-col md:flex-row items-center flex-wrap justify-center align-middle p-4 border-solid border-t-2 border-rose-100 dark:border-stone-500"
    >
      <p className="text-sm font-source italic text-emerald-900 dark:text-stone-100">
        © 2023 Rose Newman | 3D Cat Model by
        <a
          className="pl-1"
          href="https://www.turbosquid.com/3d-models/cat-version-3d-model-1613622"
          target="_blank"
        >
          DeepDreamDimension
        </a>
      </p>
    </div>
  );
}

export default Footer;
