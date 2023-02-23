import React from "react";
import CSVReader from "../../Components/CSVReader/CSVReader";
import useCSVStore from "../../Store/CSVStore";

const CSVPage = () => {
  const csvData = useCSVStore((state) => state.csvData);

  return (
    <div className=" flex mx-auto mt-16  w-1/2 ">
      <div className="mx-auto  bg-gray-200  ">
        <CSVReader />
      </div>
    </div>
  );
};

export default CSVPage;
