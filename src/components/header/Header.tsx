import React, { useEffect, useRef, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import LogoAndName from "./LogoAndName";
import Navbar from "./Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ThemeProps {
  theme: string;
  /** when passing down the state setter function returned by `useState` to a child component.
   *  `number` is an example, swap out with whatever the type of your state */
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ theme, setTheme }: ThemeProps) {
  const headerRef = useRef<null | HTMLDivElement>(null);
  let [offsetHeight, setOffsetHeight] = useState(0);

  const isLessThanMediumScreenSize = useMediaQuery("(min-width:768px)");
  useEffect(() => {
    if (headerRef) {
      const headerHeight = headerRef.current?.offsetHeight;
      //@ts-ignore
      setOffsetHeight(headerHeight * -1);
    }
  }, [isLessThanMediumScreenSize]);

  console.log(offsetHeight);

  // on small screens, flex direction should be column and align items center
  return (
    <div
      ref={headerRef}
      className="sticky top-0 z-10 bg-inherit rounded-b-lg flex flex-col md:flex-row items-center flex-wrap justify-between align-middle pb-1 border-solid border-b-2 border-rose-200 dark:border-amber-900"
    >
      <div className="flex flex-col md:flex-row items-center flex-wrap align-middle">
        <LogoAndName theme={theme} />
        <Navbar offsetHeight={offsetHeight} />
      </div>
      <DarkModeButton theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default Header;
