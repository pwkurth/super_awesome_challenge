import React from "react";

const Skeleton = () => {
  return (
    <div class=" bg-slate-100 w-1/3 h-[955px] mt-16 mx-auto shadow-md">
      <div class="p-20">
        <div role="status" class="animate-pulse">
          <article class="prose font-poppins">
            <h1 class="h-12 rounded-full bg-gray-700 w-[320px] "></h1>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[556px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[596px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[606px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[572px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[554px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[554px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[524px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[566px] mb-3.5"></div>
            <blockquote class="text-2xl text-gray-800">
              <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-[566px] mb-2.5"></div>
              <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-[536px] mb-2.5"></div>
              <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-[466px] mb-2.5"></div>
            </blockquote>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[576px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[566px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[596px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[542px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[554px] mb-3.5"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[424px]"></div>
            <figcaption class="flex items-center justify-center mt-12 ml-3 space-x-3">
              <svg
                class="w-12 h-12 mr-2 text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="flex items-center divide-x-2  divide-gray-700">
                <cite class="pr-3 font-medium text-gray-900 ">
                  <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80px]"></div>
                </cite>
                <cite class="pl-3 text-sm font-light text-gray-700 ">
                  <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80px]"></div>
                </cite>
              </div>
            </figcaption>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
