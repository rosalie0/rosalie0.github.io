import React from "react";
import greenCatIcon from "../../assets/catIcon/cat-green-small.png";
import light200GreenCatIcon from "../../assets/catIcon/cat-200-green-small.png";
import { animateScroll as scroll } from "react-scroll";

const LogoAndName = ({ theme }: { theme: string }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <a className="cursor-pointer" onClick={scrollToTop}>
      <div className="flex gap-2 items-center sm:pl-4">
        <img
          alt="a green cartoon cat face smiling"
          src={theme === "dark" ? light200GreenCatIcon : greenCatIcon}
          className="h-10"
        />
        <h1
          className="
          w-[200px] sm:w-auto
          whitespace-nowrap
          leading-none
        text-[1.5rem] sm:text-[2rem] font-comfortaa text-emerald-900 dark:text-emerald-100 font-bold"
        >
          rosalie newman
        </h1>
      </div>
    </a>
  );
};

export default LogoAndName;
