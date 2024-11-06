import { FaCloudUploadAlt } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
// import nimbusLogo from '../../resources/nimbus_logo.png';

const iconSize = 18;

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 m-0 flex flex-col
                    bg-primary text-white shadow-lg">
        
        <SideBarIcon icon={<FaCloudUploadAlt size={iconSize} />} text={"Upload file"} />
        <Divider />
        <SideBarIcon icon={<ImFolderOpen size={iconSize}/>} text={"My files"} /> 
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;