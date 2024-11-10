import { ImFolderOpen, ImHistory, ImBin, ImStatsDots } from "react-icons/im";
import { BsGearWideConnected } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { FaGithub, FaAws } from "react-icons/fa";

export const menuItems = [
    { icon: ImFolderOpen, text: "My files", path: "/files" },
    { icon: ImBin, text: "Recycle Bin", path: "/recycleBin", iconColor: "text-red-500" },
    { icon: ImStatsDots, text: "Bucket Stats", path: "/stats", iconColor: "text-green-400" },
    { icon: FaAws, text: "S3 Dashboard", path: "/s3Dashboard", iconColor: "text-orange-500" },
    { icon: FaGithub, text: "GitHub Repo", path: "/github", iconColor: "text-black" },
    { icon: BsGearWideConnected, text: "Settings", path: "/settings", iconColor: "text-yellow-500" },
    { icon: CiLogout, text: "Logout", path: "/logout", iconColor: "text-red-400" }
  ];
