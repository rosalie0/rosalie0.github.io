import React from "react";
import { NavLink } from "react-router-dom";
import greenCatIcon from "../../assets/cat-green-small.png";
import lightGreenCatIcon from "../../assets/cat-light-green-small.png";
import light200GreenCatIcon from "../../assets/cat-200-green-small.png";
import { Link, animateScroll as scroll } from "react-scroll";

interface Props {
  theme: string;
}

const LogoAndName = ({ theme }: Props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <a className="cursor-pointer" onClick={scrollToTop}>
      <div className="flex gap-2 items-center pl-4">
        <img
          alt="a green cartoon cat face smiling"
          src={theme === "dark" ? light200GreenCatIcon : greenCatIcon}
          className="h-10"
        />
        <h1 className="text-[2rem] whitespace-nowrap font-comfortaa text-emerald-900 dark:text-emerald-100 font-bold">
          rosalie newman
        </h1>
      </div>
    </a>
  );
};

export default LogoAndName;
