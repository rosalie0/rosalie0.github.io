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

  const btn =
    "bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-2 rounded";
  const btnDark = " dark:bg-amber-200 dark:hover:bg-amber-300 dark:text-black";
  return (
    <div className="pr-4">
      <button
        className={btn + btnDark}
        //className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-200 dark:hover:bg-amber-300 dark:text-black font-bold py-2 px-4 rounded"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default DarkModeButton;
