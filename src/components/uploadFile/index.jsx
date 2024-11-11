import React, { useState } from "react";
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
    console.log("File selected:", file);

    // Optionally, trigger file upload (sending to backend via fetch or axios)
    // Example:
    const formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:8080/s3/upload/file", {
      method: "POST",
      body: formData,
    });

    // After upload is done, close the popup and handle the success logic
    onUpload();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 transition-all">
      <div className="gradient-bg w-full max-w-sm rounded-lg p-8 text-white shadow-lg">
        <h2 className="mb-4 text-lg">Upload File</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 w-full rounded border p-2"
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="rounded-3xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="rounded-3xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export const UploadButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup when the upload button is clicked
  const handleShowPopup = () => setShowPopup(true);

  // Close the popup
  const handleClosePopup = () => setShowPopup(false);

  // Success callback after upload
  const handleUploadSuccess = () => {
    alert("File uploaded successfully!");
  };

  return (
    <div>
      {/* Upload Button */}
      <button
        onClick={handleShowPopup}
        className="duration-900 group mb-1 ml-1 flex items-center justify-end rounded-3xl border-2 border-gray-600 bg-gradient-to-tr from-[#1f2937] to-[#2c3b52] py-2 pl-2 text-sm text-white transition-all hover:bg-secondary"
      >
        <FaCloudUploadAlt className="group-hover:text-blue-400" size={19} />
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
};
