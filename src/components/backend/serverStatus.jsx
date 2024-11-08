import { LuWifi } from "react-icons/lu";
import { LuWifiOff } from "react-icons/lu";

const ServerStatus = () => {
    return (
        <div>{getHealthCheck()}</div>
    );
}

const getHealthCheck = () => {
    fetch('http://localhost:8080/management/healthcheck', { method: 'GET' })
    .then(response => {
        if (response.ok) { 
            return <LuWifi size={20} className="text-green-500" />; 
        } else {
            return <LuWifiOff size={20} className="text-red-500" />
        }
    })
    .catch(error => {
        // Handle network errors or fetch issues
        console.error('Failed to get HealthCheck:', error);
    });
};

export default ServerStatus;