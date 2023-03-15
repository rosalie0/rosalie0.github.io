import React from "react";

// Interface for darkmode state
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
    <div>
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-green-500"
        onClick={handleThemeSwitch}
      >
        toggle
      </button>
    </div>
  );
};

export default DarkModeButton;
