import { AiFillFolderOpen } from "react-icons/ai";
import { FaFilePdf, FaFile, FaFileImage, FaFileVideo, FaFileCode, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileArchive, FaFileAudio } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { GrDocumentConfig } from "react-icons/gr";

export const getIconBasedOnFileType = (fileName) => {
  // Handle folders first
  if (!fileName || fileName.endsWith('/')) {
    return getFolderIcon();
  }

  const extension = fileName.toLowerCase().split('.').pop();

  switch (extension) {
    // Documents
    case 'pdf':
      return getPdfIcon();
    case 'doc':
    case 'docx':
    case 'rtf':
    case 'odt':
      return getWordIcon();
    case 'xls':
    case 'xlsx':
    case 'csv':
      return getExcelIcon();
    case 'ppt':
    case 'pptx':
      return getPowerpointIcon();

    // Images
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'bmp':
    case 'svg':
    case 'webp':
    case 'tiff':
      return getImageIcon();

    // Videos
    case 'mp4':
    case 'avi':
    case 'mov':
    case 'wmv':
    case 'flv':
    case 'mkv':
    case 'webm':
      return getVideoIcon();

    // Audio
    case 'mp3':
    case 'wav':
    case 'ogg':
    case 'm4a':
    case 'flac':
    case 'aac':
      return getAudioIcon();

    // Archives
    case 'zip':
    case 'rar':
    case '7z':
    case 'tar':
    case 'gz':
    case 'bz2':
      return getArchiveIcon();

    // Code files
    case 'html':
    case 'css':
    case 'js':
    case 'jsx':
    case 'ts':
    case 'tsx':
    case 'json':
    case 'xml':
    case 'py':
    case 'java':
    case 'cpp':
    case 'c':
    case 'cs':
    case 'php':
    case 'rb':
    case 'sql':
    case 'yaml':
    case 'yml':
      return getCodeIcon();

    // Database files
    case 'db':
    case 'sqlite':
    case 'mdb':
      return getDatabaseIcon();

    // Config files
    case 'env':
    case 'config':
    case 'ini':
    case 'cfg':
      return getConfigIcon();

    // Default
    default:
      return getDefaultFileIcon();
  }
};

export const getFolderIcon = () => {
  return <AiFillFolderOpen className="mr-2 text-blue-300" size={25} />;
};

export const getDatabaseIcon = () => {
  return <FaDatabase className="mr-2 text-red-400" size={25} />;
};

export const getConfigIcon = () => {
  return <GrDocumentConfig className="mr-2 text-green-400" size={25} />;
}

export const getPdfIcon = () => {
  return <FaFilePdf className="mr-2 text-red-400" size={25} />;
};

export const getImageIcon = () => {
  return <FaFileImage className="mr-2 text-green-400" size={25} />;
};

export const getFileIcon = () => {
  return <FaFile className="mr-2 text-gray-400" size={25} />;
};

// Icon for video files
export const getVideoIcon = () => {
  return <FaFileVideo className="mr-2 text-purple-400" size={25} />;
};

// Icon for code files (e.g., .js, .py, .java, etc.)
export const getCodeIcon = () => {
  return <FaFileCode className="mr-2 text-blue-400" size={25} />;
};

// Icon for Word documents
export const getWordIcon = () => {
  return <FaFileWord className="mr-2 text-blue-500" size={25} />;
};

// Icon for Excel spreadsheets
export const getExcelIcon = () => {
  return <FaFileExcel className="mr-2 text-green-500" size={25} />;
};

// Icon for PowerPoint presentations
export const getPowerpointIcon = () => {
  return <FaFilePowerpoint className="mr-2 text-orange-500" size={25} />;
};

// Icon for archive files (e.g., .zip, .rar, etc.)
export const getArchiveIcon = () => {
  return <FaFileArchive className="mr-2 text-yellow-500" size={25} />;
};

// Icon for audio files (e.g., .mp3, .wav)
export const getAudioIcon = () => {
  return <FaFileAudio className="mr-2 text-pink-400" size={25} />;
};

// Default icon for unknown file types
export const getDefaultFileIcon = () => {
  return <FaFile className="mr-2 text-gray-400" size={25} />;
};
