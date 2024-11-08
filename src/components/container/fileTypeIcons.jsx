import { AiFillFolderOpen } from "react-icons/ai";
import { FaFilePdf, FaFile, FaFileImage, FaFileVideo, FaFileCode, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileArchive, FaFileAudio } from "react-icons/fa";

export const getFolderIcon = () => {
  return <AiFillFolderOpen className="mr-2 group-hover:text-blue-300" size={25} />;
};

export const getPdfIcon = () => {
  return <FaFilePdf className="mr-2 group-hover:text-red-400" size={25} />;
};

export const getImageIcon = () => {
  return <FaFileImage className="mr-2 group-hover:text-green-400" size={25} />;
};

export const getFileIcon = () => {
  return <FaFile className="mr-2 group-hover:text-gray-400" size={25} />;
};

// Icon for video files
export const getVideoIcon = () => {
  return <FaFileVideo className="mr-2 group-hover:text-purple-400" size={25} />;
};

// Icon for code files (e.g., .js, .py, .java, etc.)
export const getCodeIcon = () => {
  return <FaFileCode className="mr-2 group-hover:text-blue-400" size={25} />;
};

// Icon for Word documents
export const getWordIcon = () => {
  return <FaFileWord className="mr-2 group-hover:text-blue-500" size={25} />;
};

// Icon for Excel spreadsheets
export const getExcelIcon = () => {
  return <FaFileExcel className="mr-2 group-hover:text-green-500" size={25} />;
};

// Icon for PowerPoint presentations
export const getPowerpointIcon = () => {
  return <FaFilePowerpoint className="mr-2 group-hover:text-orange-500" size={25} />;
};

// Icon for archive files (e.g., .zip, .rar, etc.)
export const getArchiveIcon = () => {
  return <FaFileArchive className="mr-2 group-hover:text-yellow-500" size={25} />;
};

// Icon for audio files (e.g., .mp3, .wav)
export const getAudioIcon = () => {
  return <FaFileAudio className="mr-2 group-hover:text-pink-400" size={25} />;
};

// Default icon for unknown file types
export const getDefaultFileIcon = () => {
  return <FaFile className="mr-2 group-hover:text-gray-400" size={25} />;
};
