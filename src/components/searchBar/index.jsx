// import { TEInput } from 'tw-elements-react';
import React, { useEffect, useState } from "react";

import * as Icons from "../utils/fileTypeIcons";
import { grabListofAllFiles } from "../backend/fileLookup";

const SearchBar = () => {
  const [completeList, setCompleteList] = useState([]);
  const [storageCategory, setStorageCategory] = useState("/Home");

  useEffect(() => {
    const fetchListOfFiles = async () => {
      await grabListofAllFiles().then((data) => {
        console.log(data);
        setCompleteList(data);
      });
    };

    fetchListOfFiles();
  }, []);

  const renderSearchBar = () => {
    return (
      <form className="mx-auto max-w-lg">
        <div className="flex">
          {/* <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full rounded-lg border border-s-2 border-s-gray-50 bg-mainBackground p-2.5 text-sm text-gray-500"
              placeholder="Search files ..."
            />

            <button className="borde dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute end-0 top-0 h-full rounded-e-lg p-2.5 text-sm font-medium focus:outline-none focus:ring-4">
              {/* Search Icon */}
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>

              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className="container mx-auto ml-60 mr-6 flex max-h-[calc(100vh-2rem)] flex-col rounded-3xl drop-shadow-2xl">
      <div className="sticky top-0 mx-32 p-10 pb-12">{renderSearchBar()}</div>

      {/* Body of search result */}
      <div className="h-full overflow-auto">
        <table className="min-w-full text-gray-600">
          <thead>
            <tr>
              <th className="rounded-tl-lg border-t-2 border-t-gray-600"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {completeList.map((eachRecord, index) => (
              <tr
                key={index}
                className="group transition-all hover:bg-secondary hover:bg-opacity-10"
              >
                {/* This column handles the text & icon for file */}
                <td className="rounded-l-3xl px-4 py-3 text-white group-hover:rounded-l-3xl">
                  <div className="flex items-center">
                    {/* {Icons.getIconBasedOnFileType(eachRecord)} */}
                    <button className="ml-2 text-white hover:text-blue-500 focus:outline-none">
                      {/* {formatFileName(eachRecord.fileName)} */}
                      {eachRecord}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
