import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">TROD DTMU</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">INFORMATION</p>
          <Link to="/transformers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Transformers</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <p className="title">ALERTS & STATS</p>
          
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          
          <p className="title">CURRENT</p>
          <li>
          <Link to="/Historical_current" style={{ textDecoration: "none" }}>

            <PsychologyOutlinedIcon className="icon" />
            <span>Historical Records</span></Link>
          </li>
          <li>
            <Link to="/Current_new" style={{ textDecoration: "none" }}>
            <SettingsApplicationsIcon className="icon" />
            <span>Current Stats</span></Link>
          </li>
           <p className="title">Voltage</p>
          <li>
            <Link to="/Historical_voltage" style={{ textDecoration: "none" }}>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Historical Records</span></Link>
          </li>
          
          <li>
            <Link to="/Voltage_new" style={{ textDecoration: "none" }}>
            <ExitToAppIcon className="icon" />
            <span>Current Stats</span></Link>
          </li>
          
          <p className="title">Temperature</p>
          <li>
            <Link to="/Historical_temperature" style={{ textDecoration: "none" }}>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Historical Records</span>
            </Link>
          </li>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Current Stats</span>
          </li>
          </Link>
           <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
