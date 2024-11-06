import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

import nimbusLogo from '../../resources/nimbus_logo.png';

const NavBar = () => {
    return (
        <nav className="fixed flex items-center justify-between w-full h-13 bg-primary text-black shadow-lg">
            <SidebarHeader />
            <div className="navbar-container justify-end mx-auto px-4 flex justify-end">
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
    return (
        <div>
            {/* Upload Button */}
            <button className="flex items-center justify-end px-4 py-2 bg-gray-400 text-white 
                    hover:bg-gray-500 rounded-3xl hover:rounded-xl transition-all">
                <FaCloudUploadAlt size={30} />
                <span className="text px-1">Upload</span>
            </button>
        </div>
    );
}

export default NavBar;