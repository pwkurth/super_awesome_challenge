import React from "react";

import CardLoader from "../../Components/cards/cardloader";

const About = (props) => {
  let opacity = props?.opacity;

  return (
    <div
      class={`bg-gray-900 border-2 ${
        opacity ? "opacity-20" : "opacity-1"
      } border-indigo-200 rounded-lg w-8/12 h-[32rem] mt-2 mb-6 mx-auto `}
    >
      <div class="grid grid-cols-3 gap-4 p-15 h-full place-items-center">
        <div class="ml-auto">
          <CardLoader
            firstName={"Joe"}
            lastName={"Doe"}
            funFact={
              'Clans of long ago that wanted to get rid of unwanted people without killing them used to burn their houses down -- hence the expression "to get fired"'
            }
            favNumber={18}
          />
        </div>
        <div>
          <CardLoader
            firstName={"Furi"}
            lastName={"Onik"}
            funFact={`Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry, believe it or not.`}
            favNumber={27}
          />
        </div>
        <div class="mr-auto">
          <CardLoader
            firstName={"Jane"}
            lastName={"Doe"}
            funFact={`Japan has over 200 flavours of Kit Kats. They're exclusively created for different regions, cities, and seasons. There are some tasty-sounding ones like banana, blueberry cheesecake and Oreo ice cream, as well as some very questionable ones like baked potato, melon and cheese, wasabi, and vegetable juice.`}
            favNumber={40}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
