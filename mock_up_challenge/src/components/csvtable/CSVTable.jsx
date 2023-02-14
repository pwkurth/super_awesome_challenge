import React from "react";

const CSVTable = (props) => {
  const csvResults = props?.csvResults?.data;

  return (
    <table class="mx-auto w-[95%] text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {csvResults[0]?.map((csvResult) => (
            <th scope="col" class="px-6 py-3">
              {csvResult}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csvResults?.map((csvResult, index) =>
          index !== 0 && csvResult.length > 1 ? (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {csvResult[0]}
              </th>
              {csvResult.forEach((i) => console.log(i))}
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default CSVTable;
