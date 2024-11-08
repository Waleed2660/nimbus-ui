import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import UploadButton from "./uploadFile";
import * as SideBarItems from "./sideBarItem";

const Sidebar = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed h-[calc(100vh-2rem)] overflow-auto p-2 flex flex-col
                    bg-sideBar text-white space-y-2 drop-shadow-2xl rounded-3xl 
                    ml-4 mt-4">
        <SideBarItems.SidebarHeader />
        <UploadButton />
        {SideBarItems.menuItems.slice(0, 3).map((item) => (
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
        {SideBarItems.menuItems.slice(3, 6).map((item) => (
          <SideBarItems.SidebarItem 
            key={item.path}
            icon={item.icon}
            text={item.text}
            iconColor={item.iconColor}
            isActive={location.pathname === item.path}
            onClick={() => handleItemClick(item.path)}
          />
        ))}
        <Divider />
        {SideBarItems.menuItems.slice(6).map((item) => (
          <SideBarItems.SidebarItem 
            key={item.path}
            icon={item.icon}
            text={item.text}
            iconColor={item.iconColor}
            isActive={location.pathname === item.path}
            onClick={() => handleItemClick(item.path)}
          />
        ))}
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr shadow-zinc-500 pb-2" />;

export default Sidebar;