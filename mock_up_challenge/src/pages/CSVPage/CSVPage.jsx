import React from "react";
import CSVReader from "../../components/csvreader/CSVReader";
import useCSVStore from "../../store/CSVStore";

const CSVPage = () => {
  const csvData = useCSVStore((state) => state.csvData);
  console.log(csvData?.data);

  return (
    <div class=" flex mt-16 mr-16 ml-16 shadow-md bg-red-300">
      <div class="mx-auto bg-white">
        <CSVReader />
      </div>
    </div>
  );
};

export default CSVPage;
