// import { TEInput } from 'tw-elements-react';
import React, { useEffect } from 'react';

import { grabListofAllFiles } from '../backend/fileLookup';

const SearchBar = () => {

    useEffect(() => {
        const fetchListOfFiles = async () => {
            await grabListofAllFiles().then((data) => {
                console.log(data);
            });
        };

        fetchListOfFiles();
      }, []);

    return (
        <div className="container mx-auto rounded-3xl ml-60 mr-6
                    flex flex-col max-h-[calc(100vh-2rem)] drop-shadow-2xl">

        

            <div className="overflow-auto h-full"></div>
        </div>
    );
};

export default SearchBar;