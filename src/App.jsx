import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import FilesPage from './components/files';
import SearchBar from './components/searchBar';
import RecycleBinPage from './components/recycleBin';
import ServerStatus from './components/backend/serverStatus';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="gradient-bg flex-grow flex overflow-auto w-full h-64 ">
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<FilesPage pwd={"Nimbus/Main"} />} />
            <Route path="/files" element={<FilesPage pwd={"Nimbus/Main"}/>} />
            <Route path="/fileLookup" element={<SearchBar />} />
            <Route path="/recycleBin" element={<RecycleBinPage pwd={"Nimbus/Bin"} />} />
            {/* <Route path="/stats" element={<div>Stats Page</div>} /> */}
            {/* <Route path="/s3Dashboard" element={<div>S3 Dashboard</div>} /> */}
            <Route path="/github" element={<GitHubRedirect />} />
            {/* <Route path="/settings" element={<div>Settings Page</div>} /> */}
            {/* <Route path="/logout" element={<div>Logout Page</div>} /> */}
          </Routes>

          <div className="absolute bottom-0 right-0">
            <ServerStatus />
          </div>

        </div>
      </div>
    </div>
  );
}

const GitHubRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://github.com/Waleed2660/nimbus-ui';
  }, []);
  return <div>Redirecting to GitHub...</div>;
};

export default App;
