import React from "react";
import assets from "../assets/assets";
import { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt=""
      />
      <div
        className={`flex gap-5 items-center text-gray-700 font-medium sm:text-sm ${sideBarOpen ? "max-sm:w-60 max-sm:pl-10" : "max-sm:w-0 overflow-hidden"} max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:min-h-screen max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 dark:text-white transition-all`}
      >
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => {
            setSideBarOpen((prev) => !prev);
          }}
        />

        <a
          onClick={() => {
            setSideBarOpen((prev) => !prev);
          }}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => {
            setSideBarOpen((prev) => !prev);
          }}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => {
            setSideBarOpen((prev) => !prev);
          }}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => {
            setSideBarOpen((prev) => !prev);
          }}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gam-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => {
            setSideBarOpen((prev) => !prev);
          }}
          className="w-8 sm:hidden"
        />
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex item-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Contact
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
