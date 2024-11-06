import { ImFolderOpen } from "react-icons/im";

const iconSize = 18;

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-80 m-0 flex flex-col
                    bg-primary text-black">
        <Divider />
        {/* <SideBarIcon icon={<ImFolderOpen size={iconSize}/>} text={"My files"} />  */}
        <SidebarButton text={"My files"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
  </div>
);

const SidebarButton = ({ text }) => (
  <button className="sidebar-button">
    {text}
  </button>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;