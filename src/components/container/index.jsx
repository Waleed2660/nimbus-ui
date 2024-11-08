import React from "react";
import { AiFillFolderOpen } from "react-icons/ai";

const getFolderIcon = () => {
  return <AiFillFolderOpen className="mr-2 group-hover:text-blue-300 group-hover:rounded-l-3xl" 
  size={25} />;
};

const FileContainer = () => {
  // Sample data array
  const data = [
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
    { name: "Charlie", email: "charlie@example.com", role: "User" },
  ];

  return (
    <div className="container mx-auto p-4 bg-sideBar rounded-3xl ml-64 mr-14 top-0">
      <div className="overflow-x-auto">
        <table className="min-w-full text-gray-600">
          <thead>
            <tr>
              <th className="table-header rounded-tl-lg">Name</th>
              <th className="table-header ">Email</th>
              <th className="table-header ">Size</th>
              <th className="table-header ">Uploaded</th>
              <th className="table-header rounded-tr-lg">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="group rounded-3xl hover:bg-secondary hover:bg-opacity-20 transition-all">
                <td className="flex items-center px-4 py-3 text-white rounded-l-3xl group-hover:rounded-l-3xl">{getFolderIcon()}{user.name}</td>
                <td className="px-4 py-3 text-white">{user.email}</td>
                <td className="px-4 py-3 text-white">{user.email}</td>
                <td className="px-4 py-3 text-white">{user.email}</td>
                <td className="px-4 py-3 text-white rounded-r-3xl group-hover:rounded-r-3xl">{user.role}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-0">
            <tr>
              <td colSpan="5" className="text-right px-4 pt-5">Footer content</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default FileContainer;