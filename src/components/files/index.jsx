import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SidebarItem } from "../sidebar/sideBarItem";
import * as Icons from "./fileTypeIcons";
import * as Sort from "./sort";
import { InsertServerStatus } from "../backend/serverStatus";
import  GetDirectoryView from "../backend/fileBrowser";


let currentWorkingDirectory = "Nimbus/Main/";

function handleOpen(eachRecord) {
  if (eachRecord.isFolder === true) {
    console.log("Opening Folder:", eachRecord);
    currentWorkingDirectory = currentWorkingDirectory + eachRecord.fileName;
    FilesPage(currentWorkingDirectory);
  } 
  else {
    console.log("Opening File:", eachRecord);
    // Add logic to open a modal, navigate, or perform another action
  }
};

function handleRowDoubleClick(eachRecord) {
  handleOpen(eachRecord);
};

const getCurrentTime = () => {
  const date = new Date();
  return date.toLocaleString();
};

const formatFileName = (fileName) => {
  return fileName.replace(/^Nimbus\/Main\//, "");
}

const extractWorkingDir = (data) => {
  const index = data.findIndex((element) => element.fileName === currentWorkingDirectory);
  // Remove the object at the found index
  if (index !== -1) { 
    data.splice(index, 1);
  } 
}

function FilesPage(pwd) {
  const [fileData, setFileData] = useState([]);
  const [currentWorkingDirectory, setCurrentWorkingDirectory] = useState(pwd.pwd);
  const [loading, setLoading] = useState(false);

  let data = GetDirectoryView(currentWorkingDirectory);

  extractWorkingDir(data);
  // useEffect(() => {
  //   if (currentWorkingDirectory === null) return;

  //   const fetchFolderContent = async () => {
  //     try {
  //       let data = GetDirectoryView(currentWorkingDirectory);
  //       extractWorkingDir(data);

  //       setFileData(data);
  //     }
  //     catch (error) {
  //       console.error('Error fetching file data:', error);
  //     }
  //   };

  //   fetchFolderContent();
  // }, [currentWorkingDirectory]);

  return (
    <div className="container mx-auto rounded-3xl ml-60 mr-6
                    flex flex-col ">
      {/* Renders Header */}
      {getHeader(data)}
      
      <div className="overflow-auto h-full">        
        {RenderTable(data)}
      </div>

      {/* Renders Footer Div */}
      {getFooter(data)}
      
    </div>
  );
};

function RenderTable(data) {
  
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  return (
    <table className="min-w-full text-gray-600">
    <thead>
      <tr>
        <th className="table-header rounded-tl-lg">Name {Sort.getSortIcon(sortConfig,'name')} </th>
        <th className="table-header w-1/6">Modified {Sort.getSortIcon(sortConfig,'modified')}</th>
        <th className="table-header w-1/6">File Size {Sort.getSortIcon(sortConfig,'size')}</th>
        <th className="table-header w-1/6 rounded-tr-lg">Kind {Sort.getSortIcon(sortConfig,'kind')}</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-600">
      {data.map((eachRecord, index) => (
        <tr key={index} className="group hover:bg-secondary hover:bg-opacity-20 transition-all"
            onDoubleClick={() => handleRowDoubleClick(eachRecord)}>
          
          {/* This column handles the text & icon for file */}
          <td className="px-4 py-3 text-white rounded-l-3xl group-hover:rounded-l-3xl">
            <div className="flex items-center">
              {Icons.getIconBasedOnFileType(eachRecord.fileName)}
                <button 
                  onClick={() => handleOpen(eachRecord)}
                  className="text-white hover:text-blue-500 focus:outline-none ml-2">{formatFileName(eachRecord.fileName)}
                </button>
            </div>
          </td>

          <td className="px-4 py-3 text-white">{eachRecord.lastModified}</td>
          <td className="px-4 py-3 text-white">{eachRecord.size}</td>
          <td className="px-4 py-3 text-white">{eachRecord.contentType}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
};

const displayEmptyFolder = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <h2 className="text-2xl text-gray-400">No items here yet!</h2>
    </div>
  );
};

function getHeader(data) {
  return (
    <div className="sticky top-0 pb-1 pt-1">
        <div className="flex items-center justify-start text-right px-2 pt-1 text-gray-500">
        {backButton()}
        {getCurrentWorkingDirectory()}
        </div>
    </div>
  );
};

function backButton() {
  return (
    <SidebarItem icon={IoMdArrowRoundBack} iconColor={"text-red-400"}/>
  );
}

function getCurrentWorkingDirectory() {
  let pwd;
  if (currentWorkingDirectory === "Nimbus/Main/") {
    pwd = "Home/";
  }
  return (
    <div className="flex items-center justify-start text-right px-2 pt-1 text-gray-500">
      <span>{pwd}</span>
    </div>
  );
}

function getFooter(data) {
  return (
    <div className="sticky bottom-0 pt-1">
        <div className="flex items-center justify-end text-right px-2 pt-1 text-gray-500">
          <span>Items: {data.length}</span>
          <span className="m-3">|</span>
          {InsertServerStatus()}
          <span className="m-3">|</span>
          <span>Last Updated: {getCurrentTime()}</span>
        </div>
    </div>
  );
};

export default FilesPage;