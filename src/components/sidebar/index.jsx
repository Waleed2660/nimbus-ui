import { FaCloudUploadAlt } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
// import nimbusLogo from '../../resources/nimbus_logo.png';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-40 m-0 flex flex-col
                    bg-primary text-white shadow-lg z-10">
        
        <SideBarIcon icon={<FaCloudUploadAlt size={50} />} />
        <Divider />
        <SideBarIcon icon={<ImFolderOpen size={50}/>} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">
    {icon}
    {/* <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span> */}
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;