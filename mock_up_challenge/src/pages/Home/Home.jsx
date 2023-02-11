import React from "react";
import DocumentCartoon from "../../assets/home/document-cartoon.png";

const Home = () => {
  return (
    <div class="bg-slate-100 mt-16 mr-16 ml-16">
      <div class="flex flex-row">
        <div class="basis-2/4 p-20">
          <p class=" text-2xl font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
            nulla porttitor massa id neque aliquam vestibulum morbi. Enim
            facilisis gravida neque convallis a cras. Quis vel eros donec ac
            odio tempor orci. Orci a scelerisque purus semper eget duis at
            tellus at.
          </p>
        </div>
        <div class="basis-1/2 ">
          <img
            class="md:container md:mx-auto object-contain p-20"
            src={DocumentCartoon}
            alt={"Document Cartoon"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
