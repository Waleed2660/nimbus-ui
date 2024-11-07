import { useState } from 'react';
// import { FiUpload } from "react-icons/fi";

function FileUploadPopup({ onClose, onUpload }) {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      if (!file) return;
  
      const formData = new FormData();
      formData.append('file', file);
  
      // Send file to Spring Boot backend
      fetch('http://localhost:8080/upload/file', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('File uploaded successfully', data);
          onUpload();  // Optionally handle success
          onClose();   // Close the popup after upload
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    };
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-lg mb-4">Upload File</h2>
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="mb-4 border rounded p-2"
          />
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-3xl hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
}

export default FileUploadPopup;