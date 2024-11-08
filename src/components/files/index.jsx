import React, { useState } from "react";
import * as Icons from "./fileTypeIcons";
import * as Sort from "./sort";

const handleOpen = (user) => {
  console.log("Opening user:", user);
  // Add logic to open a modal, navigate, or perform another action
};

const handleRowDoubleClick = (user) => {
  console.log("Double-clicked on user:", user);
  // Perform the action, such as opening a modal or redirecting
};

const getCurrentTime = () => {
  const date = new Date();
  return date.toLocaleString();
};


const FileContainer = () => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  // Sample data array
  const data = [
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Aliceeeeeeeeeeeeeeeeeeeeeeee", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
  ];

  return (
    <div className="container mx-auto p-5 bg-sideBar rounded-3xl ml-60 mr-11 mb-6
                    flex flex-col max-h-[calc(100vh-2rem)] drop-shadow-2xl">
      <div className="overflow-auto h-full">
        <table className="min-w-full text-gray-600">
          <thead>
            <tr>
              <th className="table-header rounded-tl-lg">Name {Sort.getSortIcon(sortConfig,'name')} </th>
              <th className="table-header w-1/6">Modified {Sort.getSortIcon(sortConfig,'modified')}</th>
              <th className="table-header w-1/6">Size {Sort.getSortIcon(sortConfig,'size')}</th>
              <th className="table-header w-1/6">Kind {Sort.getSortIcon(sortConfig,'kind')}</th>
              <th className="table-header rounded-tr-lg w-1/6">Tag {Sort.getSortIcon(sortConfig,'tag')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {data.map((user, index) => (
              <tr key={index} className="group hover:bg-secondary hover:bg-opacity-20 transition-all"
                  onDoubleClick={() => handleRowDoubleClick(user)}>
                
                {/* This column handles the text & icon for file */}
                <td className="px-4 py-3 text-white rounded-l-3xl group-hover:rounded-l-3xl">
                  <div className="flex items-center">
                    {Icons.getPdfIcon()}
                      <button 
                        onClick={() => handleOpen(user)}
                        className="text-white hover:text-blue-500 focus:outline-none ml-2">{user.name}
                      </button>
                  </div>
                </td>

                <td className="px-4 py-3 text-white">{user.email}</td>
                <td className="px-4 py-3 text-white">{user.email}</td>
                <td className="px-4 py-3 text-white">{user.email}</td>
                <td className="px-4 py-3 text-white rounded-r-3xl group-hover:rounded-r-3xl">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Div */}
      <div className="sticky bottom-0 pt-1 w-full border-t border-gray-600">
          <div className="text-right px-4 py-1 text-gray-500">
            Last Updated: {getCurrentTime()}
          </div>
      </div>
      
    </div>
  );
};

export default FileContainer;