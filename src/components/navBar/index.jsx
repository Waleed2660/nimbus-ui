import React from 'react';
import { FaGithub } from "react-icons/fa";


import nimbusLogo from '../../resources/nimbus_logo.png';

const NavBar = () => {
    return (
        <nav className="fixed flex items-center w-full h-13 bg-navBar 
                        text-white shadow-lg z-10">
            <NavbarHeader />

            <div className="justify-end flex ml-auto pr-2 space-x-2">
                <GitHubButton />
            </div>

        </nav>
    );
};

const NavbarHeader = () => (
    <div className="flex items-center rounded-lg">
      <img src={nimbusLogo} alt="Nimbus Logo" className="h-20 w-20" />
      <h2 className="text-2xl font-bold">Nimbus</h2>
    </div>
  );

function GitHubButton() {  
    const handleGitHubClick = () => {
        window.location.href = 'https://github.com/Waleed2660/nimbus-ui';
    };

    return (
        <div>
            <button onClick={handleGitHubClick} 
                    className="group flex items-center justify-end px-4 py-2 bg-navBarButtonBackground text-white 
                    hover:bg-secondary rounded-3xl hover:rounded-xl transition-all">
                <FaGithub className="group-hover:text-blue-400" size={30} />
                <span className="text px-2">GitHub</span>
            </button>
        </div>
    );
}

export default NavBar;