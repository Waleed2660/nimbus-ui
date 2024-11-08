import React from "react";
import * as Icons from "./Icons";

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
  // Sample data array
  const data = [
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },

  ];

  return (
    <div className="container mx-auto p-5 bg-sideBar rounded-3xl ml-64 mr-14 mb-10
                    flex flex-col max-h-[calc(100vh-2rem)] drop-shadow-2xl">
      <div className="overflow-auto h-full">
        <table className="min-w-full text-gray-600">
          <thead>
            <tr>
              <th className="table-header rounded-tl-lg">Name</th>
              <th className="table-header ">Modified</th>
              <th className="table-header ">Size</th>
              <th className="table-header ">Kind</th>
              <th className="table-header rounded-tr-lg">Tag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {data.map((user, index) => (
              <tr key={index} className="group hover:bg-secondary hover:bg-opacity-20 transition-all"
                  onDoubleClick={() => handleRowDoubleClick(user)}>
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
          <tfoot className="border-t-0">
            <tr>
              <td colSpan="5" className="text-right px-4 pt-5">Last Updated: {getCurrentTime()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default FileContainer;