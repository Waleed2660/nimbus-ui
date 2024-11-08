import { ImFolderOpen, ImHistory, ImBin, ImStatsDots } from "react-icons/im";
import { BsGearWideConnected } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";
import { FaGithub, FaAws } from "react-icons/fa";

import nimbusLogo from '../../resources/nimbus_logo.png';

export const menuItems = [
  { icon: ImFolderOpen, text: "My files", path: "/files" },
  { icon: ImHistory, text: "Upload History", path: "/uploadHistory", iconColor: "text-yellow-500" },
  { icon: ImBin, text: "Recycle Bin", path: "/recycleBin", iconColor: "text-red-400" },
  // { icon: IoMdCloudUpload, text: "Uploads", path: "../uploads", iconColor: "text-green-500" },
  { icon: ImStatsDots, text: "Bucket Stats", path: "/stats", iconColor: "text-red-400" },
  { icon: FaAws, text: "S3 Dashboard", path: "/s3Dashboard", iconColor: "" },
  { icon: FaGithub, text: "GitHub Repo", path: "/github", iconColor: "" },
  { icon: BsGearWideConnected, text: "Settings", path: "/settings", iconColor: "text-yellow-500" },
  { icon: CiLogout, text: "Logout", path: "/logout", iconColor: "text-red-400" }
];

export const SidebarHeader = () => (
    <div className="flex items-center rounded-lg">
      <img src={nimbusLogo} alt="Nimbus Logo" className="h-20 w-20" />
      <h2 className="text-2xl font-bold">Nimbus</h2>
    </div>
  );
  
export const SidebarItem = ({ icon, text, iconColor, isActive, onClick }) => (
    <div onClick={onClick}
          className={`relative group flex items-center justify-start px-4 py-2 mr-2 ml-2
                     rounded-3xl transition-all
                      ${isActive ? 'drop-shadow-2xl bg-gradient-to-tr from-[#111827] to-[#1e293b] transition-colors duration-300' : 'hover:bg-secondary'}`}>
      <SideBarIcon icon={icon} color={iconColor} isActive={isActive}/>
      <SidebarButton text={text} />
    </div>
  );
  
const SideBarIcon = ({ icon: Icon, size = 20, color = "text-blue-400", isActive }) => (
    <div className={`sidebar-icon group-hover:${color} ${isActive ? `${color}` : ''}`
    }>
      <Icon size={size} />
  </div>
  );
  
const SidebarButton = ({ text }) => (
    <button className="sidebar-button pl-4">
      {text}
    </button>
  );
  