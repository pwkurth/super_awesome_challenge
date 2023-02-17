import React from "react";
import CSVReader from "../../components/csvreader/CSVReader";
import useCSVStore from "../../store/CSVStore";

const CSVPage = () => {
  const csvData = useCSVStore((state) => state.csvData);
  console.log(csvData?.data);

  return (
    <div class=" flex mx-auto mt-16  w-1/2 ">
      <div class="mx-auto  bg-gray-200  ">
        <CSVReader />
      </div>
    </div>
  );
};

export default CSVPage;
