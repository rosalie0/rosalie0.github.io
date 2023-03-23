import React from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

interface ThemeProps {
  theme: string;
  /** when passing down the state setter function returned by `useState` to a child component.
   *  `number` is an example, swap out with whatever the type of your state */
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const DarkModeButton = ({ theme, setTheme }: ThemeProps) => {
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="md:pr-4">
      <button
        //aria-label can be used in cases where text that could label the element is not visible.
        aria-label="dark or light mode button"
        className="text-emerald-900 dark:text-emerald-200 font-bold text-xl py-2 px-2"
        //className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-200 dark:hover:bg-amber-300 dark:text-black font-bold py-2 px-4 rounded"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default DarkModeButton;
