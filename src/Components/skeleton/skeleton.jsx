import React from "react";

const Skeleton = () => {
  return (
    <div className=" bg-slate-100 w-1/3 h-[955px] mt-16 mx-auto shadow-md">
      <div className="p-20">
        <div role="status" className="animate-pulse">
          <article className="prose font-poppins">
            <h1 className="h-12 rounded-full bg-gray-700 w-[320px] "></h1>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[556px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[596px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[606px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[572px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[554px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[554px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[524px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[566px] mb-3.5"></div>
            <blockquote className="text-2xl text-gray-800">
              <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-[566px] mb-2.5"></div>
              <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-[536px] mb-2.5"></div>
              <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-[466px] mb-2.5"></div>
            </blockquote>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[576px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[566px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[596px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[542px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[554px] mb-3.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[424px]"></div>
            <figcaption className="flex items-center justify-center mt-12 ml-3 space-x-3">
              <svg
                className="w-12 h-12 mr-2 text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="flex items-center divide-x-2  divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 ">
                  <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80px]"></div>
                </cite>
                <cite className="pl-3 text-sm font-light text-gray-700 ">
                  <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80px]"></div>
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
