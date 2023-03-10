import React, { useState } from "react";
import avatarIcon from "../../Assets/Navbar/bussinyaak.png";
import genericLogo from "../../Assets/Navbar/black-mesa-logo.svg";

const Navbar = () => {
  const [userName] = useState("JB");

  return (
    <nav className="py-3 bg-gray-800">
      <div className="flex">
        <a href="/" className="flex items-center mr-0 ml-10 ">
          <img
            src={genericLogo}
            className="h-6  sm:h-9 pr-2"
            alt="Generic Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap ml-2 dark:text-white hover:text-green-500">
            Best Website Ever
          </span>
        </a>
        <a href="/home" className="flex items-center ml-10 mr-10">
          <span className="self-center text-xl whitespace-nowrap dark:text-white hover:text-green-500 ">
            Home
          </span>
        </a>
        <a href="/csv" className="flex items-center ml-0 mr-10">
          <span className="self-center text-xl whitespace-nowrap dark:text-white hover:text-green-500">
            CSV Reader
          </span>
        </a>
        <div className="flex items-center ml-auto mr-4">
          <span className="self-center text-xl whitespace-nowrap dark:text-white ">
            Hello, {userName}
          </span>
        </div>
        <div className="flex items-center ml-0 mr-10 ">
          <img
            className="w-12 h-12 rounded-full cursor-pointer "
            src={avatarIcon}
            alt="JB Killing It"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
