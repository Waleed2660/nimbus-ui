import { React, useState, useEffect } from "react";
import { LuWifi, LuWifiOff } from "react-icons/lu";

const ServerStatus = () => {
  // return (
  //     <div>{getHealthCheck()}</div>
  // );
};

const getHealthCheck = async () => {
  try {
    const response = await fetch(
      "http://localhost:8080/management/healthcheck",
      {
        method: "GET",
      },
    );
    return response.status === 200;
  } catch (error) {
    console.error("Error checking backend status:", error);
    return false;
  }
};

export const InsertServerStatus = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const status = await getHealthCheck();
      setIsOnline(status);
    };

    checkStatus();

    // Optional: Poll status every 30 seconds
    const interval = setInterval(checkStatus, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <span>Server:</span>
      {isOnline ? (
        <LuWifi className="text-green-400" />
      ) : (
        <LuWifiOff className="text-red-400" />
      )}
    </div>
  );
};

export default ServerStatus;
