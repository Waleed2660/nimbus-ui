const backendUrl = 'http://localhost:8080/s3/bucket/main';
let targetDirectory = '';

export const GetDirectoryView = async (currentWorkingDirectory) => {

    targetDirectory = currentWorkingDirectory;
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

        return response.json();
    } 
    catch (error) {
        console.error('Error fetching content from backend:', error);
        return [];
    }
};