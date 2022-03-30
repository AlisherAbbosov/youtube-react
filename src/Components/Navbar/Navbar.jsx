import React from "react";
import Centre from "./Centre/Centre";
import Left from "./Left/Left";
import "./Navbar.scss";
import Right from "./Right/Right";

const Navbar = () => {
  return (
    <div className="navbar">
      <Left />
      <Centre />
      <Right />
    </div>
  );
};
export default Navbar;
