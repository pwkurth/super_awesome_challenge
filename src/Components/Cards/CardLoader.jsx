import React from "react";

const CardLoader = (props) => {
  return (
    <div className="relative flex flex-col bg-gray-800 border border-indigo-500 font-poppins max-w-sm h-[24rem] p-6 rounded-lg">
      <div className="flex flex-row border-b-2 border-b-indigo-500">
        <h5 className="text-2xl  font-bold tracking-tight   text-white hover:text-green-300 ">
          {props.firstName} {props.lastName}
        </h5>
        <div className="inline-flex ml-auto absolute right-2 top-2 items-center px-2 py-2 text-sm font-medium text-center text-white bg-white rounded-3xl "></div>
      </div>
      <h6 className="mb-2 mt-1 text-xl  tracking-tight text-white">
        Favorite Fact
      </h6>
      <p className="mb-3 font-normal text-indigo-200">{props.funFact}</p>
      <div className="mt-auto">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 "
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default CardLoader;
