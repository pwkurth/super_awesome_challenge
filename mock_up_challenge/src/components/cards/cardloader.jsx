import React from "react";

const CardLoader = (props) => {
  return (
    <div class="font-poppins max-w-sm p-6 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <div class="border-b-2 border-b-indigo-500">
        <h5 class="text-2xl  font-bold tracking-tight  text-gray-900 dark:text-white">
          {props.firstName} {props.lastName}
        </h5>
      </div>
      <h6 class="mb-2 mt-2 text-xl  tracking-tight text-gray-900 dark:text-white">
        Favorite Fact
      </h6>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.funFact}
      </p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
      </a>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {props.favNumber}
      </a>
    </div>
  );
};

export default CardLoader;
