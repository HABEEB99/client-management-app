"use client";

import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <div onClick={() => setTheme("light")} className="">
        <BsFillSunFill className="text-2xl text-yellow-500 hover:text-yellow-600 cursor-pointer" />
      </div>
    );
  } else {
    return (
      <div onClick={() => setTheme("dark")} className="">
        <BsFillMoonFill className="text-2xl text-gray-500 hover:text-gray-600 cursor-pointer" />
      </div>
    );
  }
};

export default ThemeToggler;
