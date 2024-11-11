import { useNavigate, useLocation } from "react-router-dom";

import * as SideBarItems from "./sideBarItem";
import { menuItems } from "./sideBarData";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (path) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  return (
    <div className="duration-900 fixed ml-4 mt-4 flex h-[calc(100vh-2rem)] w-16 flex-col space-y-2 overflow-auto rounded-3xl border-2 border-[#1f2937] bg-sideBar bg-gradient-to-tr from-[#1f2937] to-[#2c3b52] text-white drop-shadow-2xl transition-all md:w-48">
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

const Divider = () => <hr className="sidebar-hr pb-2 shadow-zinc-700" />;

export default Sidebar;
