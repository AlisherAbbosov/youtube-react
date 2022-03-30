import React from "react";
import "./Left.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../Lib/Icons/Navbar/Menu.svg";
import Logo from "../../Lib/Icons/Navbar/logo.png";

const Left = () => {
  return (
    <div className="navbar__left">
      <img className="navbar__left-icon" src={MenuIcon} alt="menuIcon" />
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Left;
