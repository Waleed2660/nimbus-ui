import { ImFolderOpen } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="fixed top-20 left-0 h-screen w-41 m-0 flex flex-col
                    bg-primary text-black">
        <Divider />
        {/* <SideBarIcon icon={<ImFolderOpen size={iconSize}/>} text={"My files"} />  */}
        <SidebarItem icon={ImFolderOpen} text={"My files"} />
        <SidebarButton text={"My files"} />
        <SidebarButton text={"Upload History"} />
        <SidebarButton text={"Recycle Bin"} />

        <div className="fixed bottom-0">
          <Divider />
          <SidebarButton text={"Settings"} />
          <SidebarButton text={"Logout"} />
          
        </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2">
    <SideBarIcon icon={icon} />
    <SidebarButton text={text} />
  </div>
);

const SideBarIcon = ({ icon: Icon, size = 10 }) => (
  <div className="sidebar-icon group flex items-center">
    <Icon size={size} />
  </div>
);

const SidebarButton = ({ text }) => (
  <button className="sidebar-button px-5 py-5 relative flex items-center h-5 w-60 mt-2 mb-2 mx-auto 
                  bg-primary text-black hover:bg-secondary rounded-3xl hover:rounded-xl transition-all">
    {text}
  </button>
);

const Divider = () => <hr className="sidebar-hr shadow-lg" />;

export default Sidebar;