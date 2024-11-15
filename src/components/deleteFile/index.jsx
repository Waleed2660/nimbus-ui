

const getDeleteButton = () => {
    <div>
    {/* Upload Button */}
    <button
      onClick={handleShowPopup}
      className="duration-900 group mb-1 ml-1 flex items-center justify-end rounded-3xl border-2 border-gray-600 bg-gradient-to-tr from-[#1f2937] to-[#2c3b52] py-2 pl-2 text-sm text-white transition-all hover:bg-secondary"
    >
      <FaCloudUploadAlt className="group-hover:text-blue-400" size={19} />
      <span className="text px-2">Delete</span>
    </button>

    {/* Show the file upload popup */}
    {showPopup && (
      <FileUploadPopup
        onClose={handleClosePopup}
        onUpload={handleUploadSuccess}
      />
    )}
  </div>
};