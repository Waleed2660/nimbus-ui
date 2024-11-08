import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

function FileUploadPopup({ onClose, onUpload }) {
    const [file, setFile] = useState(null);

    // Handle file change (any type of file can be selected)
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file upload logic (sending the file to backend or just logging it)
    const handleUpload = () => {
        if (!file) return;

        // For now, just log the file details. You can implement the actual upload logic here.
        console.log('File selected:', file);

        // Optionally, trigger file upload (sending to backend via fetch or axios)
        // Example:
        const formData = new FormData();
        formData.append('file', file);
        fetch('http://localhost:8080/upload/file', { method: 'POST', body: formData });

        // After upload is done, close the popup and handle the success logic
        onUpload();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg mb-4">Upload File</h2>
            <input 
            type="file" 
            onChange={handleFileChange} 
            className="mb-4 border rounded p-2 w-full"
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

function UploadButton() {  
    const [showPopup, setShowPopup] = useState(false);

    // Show the popup when the upload button is clicked
    const handleShowPopup = () => setShowPopup(true);
  
    // Close the popup
    const handleClosePopup = () => setShowPopup(false);
  
    // Success callback after upload
    const handleUploadSuccess = () => {
      alert('File uploaded successfully!');
    };
    
    return (
        <div>
            {/* Upload Button */}
            <button onClick={handleShowPopup} 
                    className="group flex items-center justify-end px-6 py-2 bg-navBarButtonBackground text-white 
                    hover:bg-secondary rounded-3xl hover:rounded-xl transition-all border-2 border-gray-600">
                <FaCloudUploadAlt className="group-hover:text-blue-400" size={30} />
                <span className="text px-2">Upload File</span>
            </button>

            {/* Show the file upload popup */}
            {showPopup && (
                <FileUploadPopup 
                onClose={handleClosePopup} 
                onUpload={handleUploadSuccess} 
                />
            )}
        </div>
    );
}

export default UploadButton;