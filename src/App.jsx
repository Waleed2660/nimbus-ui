import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import FilesPage from './components/files';
import HistoryPage from './components/history';
import RecycleBinPage from './components/recycleBin';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow flex overflow-auto pt-6 bg-mainBackground">
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<FilesPage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/recycleBin" element={<HistoryPage />} />
            <Route path="/history" element={<RecycleBinPage />} />
            <Route path="/stats" element={<div>Stats Page</div>} />
            <Route path="/s3Dashboard" element={<div>S3 Dashboard</div>} />
            <Route path="/github" element={<GitHubRedirect />} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/logout" element={<div>Logout Page</div>} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>

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
