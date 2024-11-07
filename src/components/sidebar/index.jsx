import { ImFolderOpen } from "react-icons/im";
import { ImHistory } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { BsGearWideConnected } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen pr-5 pl-3 pt-24 flex flex-col
                    bg-primary text-black">
        
        <SidebarItem icon={ImFolderOpen} text={"My files"} />
        <SidebarItem icon={ImHistory} text={"Upload History"} />
        <SidebarItem icon={ImBin} text={"Recycle Bin"} />
        <div className="flex-grow"></div>
        <div>
          <Divider />
          <SidebarItem icon={BsGearWideConnected} text={"Settings"} />
          <SidebarItem icon={CiLogout} text={"Logout"} />
        </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="group flex items-center justify-start px-4 py-2 text-black 
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

const Divider = () => <hr className="sidebar-hr shadow-zinc-500" />;

export default Sidebar;