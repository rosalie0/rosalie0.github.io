import React from "react";
import DarkModeButton from "./DarkModeButton";
import LogoAndName from "./LogoAndName";
import Navbar from "./Navbar";

interface ThemeProps {
  theme: string;
  /** when passing down the state setter function returned by `useState` to a child component.
   *  `number` is an example, swap out with whatever the type of your state */
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ theme, setTheme }: ThemeProps) {
  // on small screens, flex direction should be column and align items center
  return (
    <div className="flex flex-col md:flex-row items-center flex-wrap justify-between align-middle bg-violet-100">
      <LogoAndName />
      <Navbar />
      <DarkModeButton theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default Header;
