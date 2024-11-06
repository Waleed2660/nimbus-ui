import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import nimbusLogo from '../../resources/nimbus_logo.png';

const NavBar = () => {
    return (
        <nav className="fixed flex items-center justify-between w-full h-13 bg-primary text-black shadow-lg">
            <SidebarHeader />
            <div className="navbar-container mx-auto px-4 flex justify-end">
            <UploadButton />
                
            </div>
        </nav>
    );
};

const SidebarHeader = () => (
    <div className="flex items-center rounded-lg">
      <img src={nimbusLogo} alt="Nimbus Logo" className="h-20 w-20" />
      <h2 className="text-2xl font-bold">Nimbus</h2>
    </div>
  );


function UploadButton() {  
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            {/* Upload Button */}
            <button 
            onClick={toggleModal}
            className="flex items-center justify-center px-4 py-2 bg-gray-400 text-white 
                    hover:bg-gray-500 rounded-3xl hover:rounded-xl transition-all">
                <FaCloudUploadAlt size={30} />
                <span className="text px-1">Upload</span>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="absolute left-full ml-2 top-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-48 transition-transform duration-200 transform">
                <h2 className="text-sm font-semibold mb-2">Upload File</h2>
                <input
                    type="file"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                />
                </div>
            )}
        </div>
    );
}

export default NavBar;