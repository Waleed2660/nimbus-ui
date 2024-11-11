import nimbusLogo from "../../resources/nimbus_logo.png";

export const SidebarHeader = () => (
  <div className="flex items-center rounded-lg">
    <img src={nimbusLogo} alt="Nimbus Logo" className="h-20 w-20" />
    <h2 className="text-2xl font-bold">Nimbus</h2>
  </div>
);

export const SidebarItem = ({ icon, text, iconColor, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`group relative ml-2 mr-2 flex items-center justify-start rounded-3xl px-4 py-2 transition-all ${isActive ? "bg-gradient-to-tr from-[#111827] to-[#1e293b] drop-shadow-2xl transition-colors duration-300" : "hover:bg-secondary"}`}
  >
    <SideBarIcon icon={icon} color={iconColor} isActive={isActive} />
    <SidebarButton text={text} />
  </div>
);

const SideBarIcon = ({
  icon: Icon,
  size = 20,
  color = "text-blue-400",
  isActive,
}) => (
  <div
    className={`sidebar-icon group-hover:${color} ${isActive ? `${color}` : ``}`}
  >
    <Icon size={size} />
  </div>
);

const SidebarButton = ({ text }) => (
  <button className="sidebar-button pl-4">{text}</button>
);
