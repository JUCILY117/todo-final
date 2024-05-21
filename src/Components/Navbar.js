import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logoPNG from "../Assets/logo.png"; // Import the PNG file
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
  ];

  const handleCreateButtonClick = () => {
    // Redirect to the deployed Todo app URL
    window.location.href = "https://todoaayu2.netlify.app/"; // Replace with your deployed Todo app URL
  };

  return (
    <nav>
      <div className="nav-logo-container">
        {/* PNG Logo */}
        <img src={logoPNG} alt="Logo" />
      </div>
      <div className="navbar-links-container">
      {menuOptions.map((item) => (
          <Link key={item.text} to={item.path} className="navbar-link">
            {item.text}
          </Link>
        ))}
            <button className="primary-button" onClick={handleCreateButtonClick}>Login</button>

      {isAuthenticated && (
      <h2 className="user-info-container">
        Hello, <strong>{user.name || user.email}</strong>
      </h2>)
        }
      </div>
      <div className="navbar-menu-container">
        {/* Menu Icon */}
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      {/* Drawer Component */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
