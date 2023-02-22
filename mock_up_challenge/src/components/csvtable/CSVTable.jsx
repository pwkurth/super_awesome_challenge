import React from "react";

const CSVTable = (props) => {
  const csvResults = props?.csvResults?.data;

  return (
    <table class="mx-auto max-h-full text-sm text-left shadow-md text-gray-400">
      <thead class="text-xs  uppercase  bg-gray-700 text-gray-400">
        <tr>
          {csvResults[0]?.map((csvResult) => (
            <th scope="col" class="px-6 py-3">
              {csvResult}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csvResults?.slice(0, 15)?.map((csvResult, index) =>
          index !== 0 && csvResult.length > 1 ? (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {csvResult[0]}
              </th>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default CSVTable;
