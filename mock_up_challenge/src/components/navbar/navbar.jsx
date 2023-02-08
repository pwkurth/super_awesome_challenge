import React, { useState } from "react";
import avatarIcon from "../../assets/navbar/bussinyaak.png";
import genericLogo from "../../assets/navbar/generic-logo.png";

const Navbar = () => {
  const [userName] = useState("JB");

  return (
    <nav class="py-3 bg-[#1f4e76]">
      <div class="flex">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          class="flex items-center mr-0 ml-10 "
        >
          <img src={genericLogo} class="h-6  sm:h-9 pr-2" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Best Website Ever
          </span>
        </a>
        <a href="/home" class="flex items-center ml-10 mr-10">
          <span class="self-center text-xl whitespace-nowrap dark:text-white">
            Home
          </span>
        </a>
        <a href="/about" class="flex items-center ml-0 mr-10">
          <span class="self-center text-xl whitespace-nowrap dark:text-white">
            About
          </span>
        </a>
        <div class="flex items-center ml-auto mr-4">
          <span class="self-center text-xl whitespace-nowrap dark:text-white">
            Hello, {userName}
          </span>
        </div>
        <div class="flex items-center ml-0 mr-10 ">
          <img
            class="w-12 h-12 rounded-full"
            src={avatarIcon}
            alt="JB Killing It"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
