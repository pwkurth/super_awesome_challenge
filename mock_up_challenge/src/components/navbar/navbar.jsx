import React from "react";
import avatarIcon from "../../assets/navbar/bussinyaak.png";
import genericLogo from "../../assets/navbar/generic-logo.png";

const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#1e2268]">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          class="flex items-center"
        >
          <img src={genericLogo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Best Website Ever
          </span>
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-12 h-12 rounded-full"
              src={avatarIcon}
              alt="JB Killing It"
            />
          </button>

          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
