import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full h-[5vh] bg-gray-300  flex items-center justify-center space-x-2">
      <Logo />
      <span className="text-icon">&copy; 2023</span>
    </footer>
  );
};

export default Footer;
