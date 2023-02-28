import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import BarChartIcon from '@mui/icons-material/BarChart';
import { addToast } from "../redux/features/toast/toastSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/features/auth/authSlice";

const Sidebar_THV = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoggedIn} = useSelector(
    (state) => state.auth
  );
  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(signOut());
      dispatch(addToast({ type: "info", message: "You are logged out!" }));
      navigate("/login_THV");
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard_THV" style={{ textDecoration: "none" }}>
          <span className="logo">Monitoring Site</span>
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
          <p className="title">TABLES</p>          
          
          <li>
          <Link to="/chart" style={{ textDecoration: "none" }}>

            <BarChartIcon className="icon" />
            <span>Charts</span></Link>
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
          <li>
            <ExitToAppIcon className="icon" />
             <span>Logout</span>
            {isLoggedIn ? (
              <Button
              
                onClick={handleLogout}
              >
                
              </Button>
            ) : (
              <NavLink to="/login">
               
               Login
                 
                 
              </NavLink>
            )}
          </li> 
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
