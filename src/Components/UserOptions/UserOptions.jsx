import React from "react";
import "./UserOptions.scss";
import { Context } from "../../Content/Authentication";

import userImg from "../../Components/Lib/Icons/Navbar/user-img.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const UserOptions = ({ isShow }) => {
  const { setToken } = React.useContext(Context);

  const Logout = () => {
    setToken("");
  };

  return (
    <div className={`options ${isShow ? "options--open" : ""}`}>
      <div className="options__wrap">
        <img className="options__user-avatar" src={userImg} alt="" />
        John Doe
      </div>

      <NavLink to="/" className="options__user-logout" onClick={() => Logout()}>
        <LogoutIcon />
      </NavLink>
    </div>
  );
};

export default UserOptions;
