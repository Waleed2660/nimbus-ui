const backendUrl = 'http://localhost:8080/s3/bucket';
let targetDirectory = '';

const GetDirectoryView = async (currentWorkingDirectory) => {

    targetDirectory = currentWorkingDirectory;

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

    return response.json();;
};

export default GetDirectoryView;