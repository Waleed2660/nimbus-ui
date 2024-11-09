import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';

const backendUrl = 'http://localhost:8080/s3/bucket';
const category = 'Main';
const targetDirectory = '';

const GetDirectoryView = () => {
    const [fileData, setFileData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/s3/bucket', 
                    {
                        method: 'GET',
                        headers: {
                        'Accept': 'application/json',
                        'category': `${category}`,
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
    }, []);

    return fileData;
};

export default GetDirectoryView;