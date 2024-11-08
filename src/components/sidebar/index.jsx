import { ImFolderOpen, ImHistory, ImBin, ImStatsDots } from "react-icons/im";
import { BsGearWideConnected } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";

import UploadButton from "../uploadFile";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen pr-5 pl-3 pt-24 pb-2 flex flex-col
                    bg-sideBar text-white space-y-2 drop-shadow-2xl">
        <UploadButton />
        <SidebarItem icon={ImFolderOpen} text={"My files"} />
        <SidebarItem icon={ImHistory} text={"Upload History"} />
        <SidebarItem icon={ImBin} text={"Recycle Bin"} />
        <div className="flex-grow"></div>
          <SidebarItem icon={ImStatsDots} text={"Bucket Stats"} />
          <SidebarItem icon={IoMdCloudUpload} text={"Uploads"} />
          <Divider />
          <SidebarItem icon={BsGearWideConnected} text={"Settings"} />
          <SidebarItem icon={CiLogout} text={"Logout"} />
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="group flex items-center justify-start px-4 py-2 
                    hover:bg-secondary rounded-3xl hover:rounded-xl transition-all">
    <SideBarIcon icon={icon} />
    <SidebarButton text={text} />
  </div>
);

const SideBarIcon = ({ icon: Icon, size = 20 }) => (
  <div className="sidebar-icon group-hover:text-blue-400">
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