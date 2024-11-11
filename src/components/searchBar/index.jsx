// import { TEInput } from 'tw-elements-react';
import React, { useEffect, useState } from 'react';

import * as Icons from "../utils/fileTypeIcons";
import { grabListofAllFiles } from '../backend/fileLookup';

const SearchBar = () => {
    const [completeList, setCompleteList] = useState([]);
    const [storageCategory, setStorageCategory] = useState('/Home');

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
            <form className="max-w-lg mx-auto">
                <div className="flex">
                    {/* <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block bg-mainBackground text-gray-500 p-2.5 w-full z-20 text-sm rounded-lg border-s-gray-50 border-s-2 border"
                                placeholder="Search files ..."/>
                        
                        <button className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-e-lg borde focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            
                            {/* Search Icon */}
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>

                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        );
    }



    return (
        <div className="container mx-auto rounded-3xl ml-60 mr-6
                    flex flex-col max-h-[calc(100vh-2rem)] drop-shadow-2xl">
            
            <div className="sticky top-0 p-10 pb-12  mx-32">{renderSearchBar()}</div>

            {/* Body of search result */}
            <div className="overflow-auto h-full">    
                <table className="min-w-full text-gray-600">
                    <thead>
                        <tr>
                        <th className="rounded-tl-lg border-t-2 border-t-gray-600"></th>
                        </tr>
                    </thead>
                    
                    <tbody className="divide-y divide-gray-700">
                        {completeList.map((eachRecord, index) => (
                        <tr key={index} className="group hover:bg-secondary hover:bg-opacity-10 transition-all">
                            
                            {/* This column handles the text & icon for file */}
                            <td className="px-4 py-3 text-white rounded-l-3xl group-hover:rounded-l-3xl">
                            <div className="flex items-center">
                                {/* {Icons.getIconBasedOnFileType(eachRecord)} */}
                                <button 
                                    className="text-white hover:text-blue-500 focus:outline-none ml-2">
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