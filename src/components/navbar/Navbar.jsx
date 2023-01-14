import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { addToast } from "../../redux/features/toast/toastSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/features/auth/authSlice";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoggedIn} = useSelector(
    (state) => state.auth
  );
  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(signOut());
      dispatch(addToast({ type: "info", message: "You are logged out!" }));
      navigate("/login");
    }
  };


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
          
        </div>
      
        <div className="items">
          
          <div className="item">
            <LogoutSharpIcon className="icon" />
             
            {isLoggedIn ? (
              <Button
                
                variant="text"
                sx={{ color: "black" }}
                onClick={handleLogout}
                
              >
                LOGOUT
              </Button>
            ) : (
              <NavLink to="/login">
               
               Login
                 
                 
              </NavLink>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;