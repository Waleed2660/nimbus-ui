import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';

const backendUrl = 'http://localhost:8080/s3/bucket';
let targetDirectory = '';

const GetDirectoryView = (currentWorkingDirectory) => {
    const [fileData, setFileData] = useState([]);

    targetDirectory = currentWorkingDirectory;
    console.log('targetDirectory:', targetDirectory);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(backendUrl, 
                    {
                        method: 'GET',
                        headers: {
                        'Accept': 'application/json',
                        'targetDirectory': `${targetDirectory}`
                        }
                    }
                ); 
                
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                
                const data = response.json();
                data.then((result) => {
                    setFileData(result);
                });
                
            } catch (error) {
                console.error('Error fetching file data:', error);
            }
        };

        fetchData();
    }, [currentWorkingDirectory]);

    return fileData;
};

export default GetDirectoryView;