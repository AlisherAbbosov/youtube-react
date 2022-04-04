import React from "react";
import Menu from "./Menu/Menu";
import "./LeftComponent.scss";
import Users from "./Users/Users";
import { Context } from "../../Content/HasMenu";

import SettingIcon from "../../Components/Lib/Icons/Menu/setting.svg";

const LeftComponent = () => {
  const { menu } = React.useContext(Context);

  return (
    <div className={`left__component ${!menu ? "close__menu" : ""} `}>
      <Menu />
      <Users />
      <p className="settings__item">
        <img className="menu__icons" src={SettingIcon} alt="" />
        Settings
      </p>
    </div>
  );
};

export default LeftComponent;
