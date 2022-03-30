import React from "react";
import Menu from "./Menu/Menu";
import "./LeftComponent.scss";
import Users from "./Users/Users";

const LeftComponent = () => {
  return (
    <div className="left__component">
      <Menu />
      <Users />
    </div>
  );
};

export default LeftComponent;
