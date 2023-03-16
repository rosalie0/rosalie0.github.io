import React from "react";
import { NavLink } from "react-router-dom";
import greenCatIcon from "../../assets/cat-green-small.png";
import lightGreenCatIcon from "../../assets/cat-light-green-small.png";
interface Props {
  theme: string;
}

const LogoAndName = ({ theme }: Props) => {
  return (
    <NavLink to={"/"} end>
      <div className="flex gap-2 items-center pl-4">
        <img
          src={theme === "dark" ? lightGreenCatIcon : greenCatIcon}
          className="h-10"
        />
        <h1 className="text-[2rem] font-comfortaa text-emerald-600 dark:text-emerald-100 font-bold">
          rosalie newman
        </h1>
      </div>
    </NavLink>
  );
};

export default LogoAndName;
