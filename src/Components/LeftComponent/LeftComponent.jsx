import React from "react";
import Menu from "./Menu/Menu";
import "./LeftComponent.scss";
import Users from "./Users/Users";
import { Context } from "../../Content/HasMenu";

const LeftComponent = () => {
  const { menu } = React.useContext(Context);

  return (
    <div className={`left__component ${!menu ? "close__menu" : ""} `}>
      <Menu />
      <Users />
    </div>
  );
};

export default LeftComponent;
