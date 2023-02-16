import React from "react";
import DocumentCartoon from "../../assets/landing/document-cartoon.png";

const Landing = () => {
  return (
    <div className="bg-gray-900 h-[50vh]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-row items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="font-poppins max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Getting your files has never been so easy
              <br className="hidden md:block" />
              lets show you how with{" "}
              <span className="font-poppins text-green-400">trapol8</span>
            </h2>
            <p className="max-w-xl mb-4 text-base font-poppins text-gray-400 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>

            <a
              href="/home"
              className="inline-flex  items-center font-poppins font-semibold tracking-wider transition-colors duration-200 text-green-700 hover:text-green-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="green"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div>
            <img
              class="flex flex-col items-center justify-between xl:flex-row"
              src={DocumentCartoon}
              alt={"Document Cartoon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
