import { ImFolderOpen, ImHistory, ImBin, ImStatsDots } from "react-icons/im";
import { BsGearWideConnected } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";
import { FaGithub, FaAws } from "react-icons/fa";

import UploadButton from "../uploadFile";
import nimbusLogo from '../../resources/nimbus_logo.png';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen pr-5 pl-3 pt-3 pb-2 flex flex-col
                    bg-sideBar text-white space-y-2 drop-shadow-2xl">
        <SidebarHeader />
        <UploadButton />
        <SidebarItem icon={ImFolderOpen} text={"My files"} />
        <SidebarItem icon={ImHistory} iconColor={"text-yellow-500"} text={"Upload History"} />
        <SidebarItem icon={ImBin} iconColor={"text-red-400"} text={"Recycle Bin"} />
        <div className="flex-grow"></div>
          <SidebarItem icon={IoMdCloudUpload} iconColor={"text-green-500"} text={"Uploads"} />
          <SidebarItem icon={ImStatsDots} iconColor={"text-red-400"} text={"Bucket Stats"} />
          <SidebarItem icon={FaAws} text={"S3 Dashboard"} />
          <SidebarItem icon={FaGithub} text={"GitHub Repo"} />
          <Divider />
          <SidebarItem icon={BsGearWideConnected} iconColor={"text-yellow-500"} text={"Settings"} />
          <SidebarItem icon={CiLogout} iconColor={"text-red-400"} text={"Logout"} />
    </div>
  );
};

const SidebarHeader = () => (
  <div className="flex items-center rounded-lg">
    <img src={nimbusLogo} alt="Nimbus Logo" className="h-20 w-20" />
    <h2 className="text-2xl font-bold">Nimbus</h2>
  </div>
);

const SidebarItem = ({ icon, text, iconColor }) => (
  <div className="group flex items-center justify-start px-4 py-2 
                    hover:bg-secondary rounded-3xl hover:rounded-xl transition-all">
    <SideBarIcon icon={icon} color={iconColor}/>
    <SidebarButton text={text} />
  </div>
);

const SideBarIcon = ({ icon: Icon, size = 20, color = "text-blue-400" }) => (
  <div className={`sidebar-icon group-hover:${color}`}>
    <Icon size={size} />
</div>
);

const SidebarButton = ({ text }) => (
  <button className="sidebar-button pl-4">
    {text}
  </button>
);

const Divider = () => <hr className="sidebar-hr shadow-zinc-500 pb-2" />;

export default Sidebar;