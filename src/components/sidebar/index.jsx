import { useNavigate, useLocation } from 'react-router-dom';

import * as SideBarItems from "./sideBarItem";
import { menuItems } from "./sideBarData"

const Sidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (path) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  return (
    <div className="fixed h-[calc(100vh-2rem)] overflow-auto flex flex-col w-16 md:w-48 transition-all
                    bg-sideBar text-white space-y-2 drop-shadow-2xl rounded-3xl border-2 border-[#1f2937]
                    bg-gradient-to-tr from-[#1f2937] to-[#2c3b52] duration-900 
                    ml-4 mt-4">
      <SideBarItems.SidebarHeader />
      {menuItems.slice(0, 5).map((item) => (
        <SideBarItems.SidebarItem
          key={item.path}
          icon={item.icon}
          text={item.text}
          iconColor={item.iconColor}
          isActive={location.pathname === item.path}
          onClick={() => handleItemClick(item.path)}
        />
      ))}

      <div className="flex-grow"></div>

      <Divider />
      {menuItems.slice(5).map((item) => (
        <SideBarItems.SidebarItem
          key={item.path}
          icon={item.icon}
          text={item.text}
          iconColor={item.iconColor}
          isActive={location.pathname === item.path}
          onClick={() => handleItemClick(item.path)}
        />
      ))}
      <div className="mb-2"></div>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr shadow-zinc-700 pb-2" />;

export default Sidebar;