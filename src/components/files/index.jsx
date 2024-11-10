import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { SidebarItem } from "../sidebar/sideBarItem";
import * as Icons from "./fileTypeIcons";
import * as Sort from "./sort";
import { InsertServerStatus } from "../backend/serverStatus";
import  GetDirectoryView from "../backend/fileBrowser";


let currentWorkingDirectory = "Nimbus/Main/";


const getCurrentTime = () => {
  const date = new Date();
  return date.toLocaleString();
};

const formatFileName = (fileName) => {
  return fileName.replace(/^Nimbus\/Main\//, "");
}

const removeWorkingDirFromList = (data) => {
  const index = data.findIndex((element) => element.fileName.includes(currentWorkingDirectory));
  if (index !== -1) { 
    data.splice(index, 1);
  } 
}

function FilesPage(pwd) {
  const [fileData, setFileData] = useState([]);
  const [currentWorkingDirectory, setCurrentWorkingDirectory] = useState(pwd.pwd);
  const [refreshPageCounter, setRefreshPage] = useState(0);
  
  useEffect(() => {
    let mounted = true;
    const fetchFolderContent = async () => {
      GetDirectoryView(currentWorkingDirectory).then((data) => {
        if (mounted) {
          console.log("Current Working Dir:", currentWorkingDirectory);
          removeWorkingDirFromList(data);
          setFileData(data);
        }
      });
    };

    fetchFolderContent();
    return () => mounted = false

  }, [currentWorkingDirectory, refreshPageCounter]);

  const handleOpen = (eachRecord) => {
    if (eachRecord.isFolder === true) {
      setCurrentWorkingDirectory(currentWorkingDirectory + eachRecord.fileName);
    } 
    else {
      console.log("Opening File:", eachRecord);
      // Add logic to open a modal, navigate, or perform another action
    }
  };
  
  const handleRowDoubleClick = (eachRecord) => {
    handleOpen(eachRecord);
  };

  const gotoPreviousDirectory = () => {
    setCurrentWorkingDirectory(currentWorkingDirectory => currentWorkingDirectory.slice(0, currentWorkingDirectory.lastIndexOf('/')));
  };

  const refreshPage = () => {
      console.log("Refreshing Page...");
      setRefreshPage(refreshPageCounter => refreshPageCounter + 1);
  }

  const renderBackButton = () => {
    return (
      <button className="navbar-button pl-4 hover:text-red-400" 
      // onClick={gotoPreviousDirectory()}
      >
        <IoMdArrowRoundBack size={20} />
      </button>
    );
  }
  
  const renderRefreshButton = () => {
    return (
      <button className="navbar-button hover:text-green-400" onClick={() => refreshPage()}>
        <LuRefreshCw size={20} />
      </button>
    );
  }

  const getHeader = (data)=> {
    return (
      <div className="sticky top-0 pb-1 pt-1">
          <div className="flex items-center justify-start pt-1 space-x-3 text-gray-500 hover:bg-none"
          // onClick={gotoPreviousDirectory()}
          >
          {renderBackButton()}
          {renderRefreshButton()}
          {getCurrentWorkingDirectory()}
          </div>
      </div>
    );
  };

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  return (
    <div className="container mx-auto rounded-3xl ml-60 mr-6
                    flex flex-col ">
      {/* Renders Header */}
      {getHeader(fileData)}
      
      <div className="overflow-auto h-full">        
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
            {fileData.map((eachRecord, index) => (
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
      </div>

      {/* Renders Footer Div */}
      {getFooter(fileData)}
      
    </div>
  );
};

const displayEmptyFolder = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <h2 className="text-2xl text-gray-400">No items here yet!</h2>
    </div>
  );
};

function getCurrentWorkingDirectory() {
  let pwd;
  if (currentWorkingDirectory === "Nimbus/Main/") {
    pwd = "Home/";
  }
  return (
    <div className="text-gray-500 hover:text-green-50">
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