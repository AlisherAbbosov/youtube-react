import React from "react";
import "./Left.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../Lib/Icons/Navbar/Menu.svg";
import Logo from "../../Lib/Icons/Navbar/logo.png";
import { IconButton } from "@mui/material";

const Left = () => {
  return (
    <div className="navbar__left">
      <IconButton className="navbar__left-icon">
        <img src={MenuIcon} alt="menuIcon" />
      </IconButton>

      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Left;
