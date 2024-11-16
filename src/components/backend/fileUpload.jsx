const backendUrl = "http://localhost:8080/s3/upload/file";
let targetDirectory = "";

export const pushFileToS3 = async (file, currentWorkingDirectory) => {
  targetDirectory = currentWorkingDirectory + "/";
  
  try {

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { 
        "targetDirectory": `${targetDirectory}`,
      },
      body: formData,
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    return response.json();
  } catch (error) {
    console.error("Error pushing file to s3:", error);
    return [];
  }
};
