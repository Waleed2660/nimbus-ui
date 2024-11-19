import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";

import * as Icons from "../utils/fileTypeIcons";
import * as Sort from "./sort";
import { UploadButton } from "../uploadFile";
import { InsertServerStatus } from "../backend/serverStatus";
import { GetDirectoryView } from "../backend/fileBrowser";
import { toDisplayPath } from "../utils/pathHandler";

let currentWorkingDirectory = "Nimbus/Main";

function FilesPage(pwd) {
  const [fileData, setFileData] = useState([]);
  const [currentWorkingDirectory, setCurrentWorkingDirectory] = useState(
    pwd.pwd,
  );
  const [refreshPageCounter, setRefreshPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const fetchFolderContent = async () => {
      await GetDirectoryView(currentWorkingDirectory)
        .then((data) => {
          if (mounted) {
            removeWorkingDirFromList(data);
            setFileData(data);
          }
        })
        .finally(() => {
          setLoading(false);
          renderDisplayDirectory();
        });
    };

    fetchFolderContent();
    return () => (mounted = false);
  }, [currentWorkingDirectory, refreshPageCounter]);

  // Handles the opening of a folder
  const handleOpen = (eachRecord) => {
    if (eachRecord.isFolder === true) {
      setCurrentWorkingDirectory(
        (currentWorkingDirectory) =>
          currentWorkingDirectory + "/" + eachRecord.fileName,
      );
    } else {
      console.log("Opening File:", eachRecord);
      // Add logic to open a modal, navigate, or perform another action
    }
  };

  const handleRowDoubleClick = (eachRecord) => {
    handleOpen(eachRecord);
  };

  // TODO: BUG: Cannot stop the user from going back to the root directory
  const gotoPreviousDirectory = () => {
    if (currentWorkingDirectory === "Nimbus/Main") {
      return;
    }

    let listDir = currentWorkingDirectory.split("/");
    listDir.pop();
    let newDir = listDir.join("/");
    setCurrentWorkingDirectory(newDir);
  };
  
  const formatFileName = (fileName) => {
    if (!loading) {
      return fileName.replace(currentWorkingDirectory + "/", "");
    }
  };
  
  const removeWorkingDirFromList = (data) => {
    const index = data.findIndex((element) =>
      element.fileName.includes(currentWorkingDirectory),
    );
    if (index !== -1) {
      data.splice(index, 1);
    }
  };

  const renderBackButton = () => {
    return (
      <button
        className="navbar-button pl-4 hover:text-red-400"
        onClick={() => gotoPreviousDirectory()}
      >
        <IoMdArrowRoundBack size={20} />
      </button>
    );
  };

  const renderRefreshButton = () => {
    return (
      <button
        className="navbar-button hover:text-green-400"
        onClick={() =>
          setRefreshPage((refreshPageCounter) => refreshPageCounter + 1)
        }
      >
        <LuRefreshCw size={20} />
      </button>
    );
  };

  // Returns the current working directory for UI header only
  const renderDisplayDirectory = () => {
    let pwd = toDisplayPath(currentWorkingDirectory);
    return (
      <div className="text-gray-500 hover:text-green-50">
        <span>{pwd}</span>
      </div>
    );
  };

  const getHeader = () => {
    return (
      <div className="sticky top-0 pb-1 pt-1">
        <div
          className="flex items-center justify-start space-x-3 pt-1 text-gray-500 hover:bg-none">
          {renderBackButton()}
          {renderRefreshButton()}
          {renderDisplayDirectory()}

          <div className="flex-grow"></div>
          {console.log("Current Working Directory STRING: ", currentWorkingDirectory)}
          <UploadButton currentWorkingDirectory={currentWorkingDirectory}/>
        </div>
      </div>
    );
  };

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  return (
    <div className="container mx-auto ml-60 mr-6 flex flex-col rounded-3xl">
      {/* Renders Header */}
      {getHeader()}

      <div className="h-full overflow-auto">
        <table className="min-w-full text-gray-600">
          <thead>
            <tr>
              <th className="table-header rounded-tl-lg">
                Name {Sort.getSortIcon(sortConfig, "name")}{" "}
              </th>
              <th className="table-header w-1/6">
                Modified {Sort.getSortIcon(sortConfig, "modified")}
              </th>
              <th className="table-header w-1/9">
                File Size {Sort.getSortIcon(sortConfig, "size")}
              </th>
              <th className="table-header w-1/9 rounded-tr-lg">
                Kind {Sort.getSortIcon(sortConfig, "kind")}
              </th>
            </tr>
          </thead>

          {/* Display Loading animation OR show empty folder message */}
          {loading ? (
            displayLoadingAnimation()
          ) : fileData.length === 0 ? (
            displayEmptyFolder()
          ) : (
            <tbody className="divide-y divide-gray-700">
              {fileData.map((eachRecord, index) => (
                <tr
                  key={index}
                  className="group transition-all hover:bg-secondary hover:bg-opacity-10"
                  onDoubleClick={() => handleRowDoubleClick(eachRecord)}
                >
                  {/* This column handles the text & icon for file */}
                  <td className="rounded-l-3xl px-4 py-3 text-white group-hover:rounded-l-3xl">
                    <div className="flex items-center">
                      {Icons.getIconBasedOnFileType(eachRecord)}
                      <button
                        onClick={() => handleOpen(eachRecord)}
                        className="ml-2 text-white hover:text-blue-500 focus:outline-none"
                      >
                        {formatFileName(eachRecord.fileName)}
                      </button>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-white">
                    {eachRecord.lastModified}
                  </td>
                  <td className="px-4 py-3 text-white">{eachRecord.size}</td>
                  <td className="px-4 py-3 text-white">
                    {eachRecord.contentType}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Renders Footer Div */}
      {getFooter(fileData)}
    </div>
  );
}

const displayLoadingAnimation = () => {
  return (
    <div className="ml-80 flex min-h-screen w-full items-center justify-center">
      <svg
        aria-hidden="true"
        className="h-10 w-10 animate-spin fill-green-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="transparent"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const displayEmptyFolder = () => {
  return (
    <div className="ml-56 flex min-h-screen w-full items-center justify-center">
      <h2 className="text-2xl text-gray-400">No items here yet!</h2>
    </div>
  );
};

// Bundles all elements in the footer of page
function getFooter(data) {
  return (
    <div className="sticky bottom-0 pt-1">
      <div className="flex items-center justify-end px-2 pt-1 text-right text-gray-500">
        <span>Items: {data.length}</span>
        <span className="m-3">|</span>
        {InsertServerStatus()}
        <span className="m-3">|</span>
        <span>Last Updated: {getCurrentTime()}</span>
      </div>
    </div>
  );
}

const getCurrentTime = () => {
  const date = new Date();
  return date.toLocaleString();
};

// Not being used in the current implementation
// const getFloatingAlert = () => {
//   return (
//     <div className="fixed top-4 right-0 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
//       <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
//         File uploaded successfully!
//       </Alert>
//     </div>
//   );
// }

export default FilesPage;
