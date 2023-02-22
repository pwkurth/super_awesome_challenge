import React, { useState } from "react";
import CSVTable from "../CSVTable/CSVTable";
import { useCSVReader, formatFileSize } from "react-papaparse";

export default function CSVReader() {
  const [csvResults, setCsvResults] = useState(null);
  const { CSVReader } = useCSVReader();

  const clickRemove = () => {
    setCsvResults(null);
  };

  return (
    <div>
      <CSVReader
        onUploadAccepted={(results) => {
          setCsvResults(results);
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps,
          Remove,
        }) => (
          <>
            <div
              class="flex flex-col my-auto p-5 justify-center  h-auto border border-gray-500 hover:bg-slate-500"
              {...getRootProps()}
            >
              {acceptedFile ? (
                <>
                  <div class="flex-col relative z-10 bg-white h-auto w-auto">
                    <div class="flex-col p-1 items-center">
                      <span class="flex font-poppins mb-1 justify-center ">
                        File Size: {formatFileSize(acceptedFile.size)}
                      </span>
                      <span class="flex font-poppins mb-1 justify-center ">
                        File Name: {acceptedFile.name}
                      </span>
                    </div>
                    <div class="absolute bottom-14 w-auto p-1">
                      <ProgressBar />
                    </div>
                    <div
                      class="absolute h-23 right-6 top-6 w-23"
                      {...getRemoveFileProps()}
                    >
                      <button onClick={() => clickRemove()}>
                        <Remove color={"#A01919"} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div class="font-poppins mx-auto">Click to upload CSV</div>
              )}
            </div>
          </>
        )}
      </CSVReader>
      {csvResults ? <CSVTable csvResults={csvResults} /> : null}
    </div>
  );
}
