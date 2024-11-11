const backendUrl = 'http://localhost:8080/s3/bucket/list';

export const grabListofAllFiles = async () => {
    console.log('grabListofAllFiles');
    try {
        const response = await fetch(backendUrl, 
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            }
        ); 
        
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        return response.json();
    } 
    catch (error) {
        console.error('Error fetching list from backend:', error);
        return [];
    }
};