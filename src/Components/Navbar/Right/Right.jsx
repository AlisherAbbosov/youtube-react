import "./Right.scss";

import AddVideoIcon from "../../Lib/Icons/Navbar/add-video.svg";
import MoreIcon from "../../Lib/Icons/Navbar/more.svg";
import NotiIcon from "../../Lib/Icons/Navbar/notification.svg";
import userImg from "../../Lib/Icons/Navbar/user-img.png";
import { NavLink } from "react-router-dom";

const Right = () => {
  return (
    <div className="navbar__right">
      <div className="navbar__right-icons">
        <img className="navbar__right-icon" src={AddVideoIcon} alt="addicon" />
        <img className="navbar__right-icon" src={MoreIcon} alt="more" />
        <img className="navbar__right-icon" src={NotiIcon} alt="Noti" />
      </div>
      <NavLink to="/">
        <img className="navbar__right-icon" src={userImg} alt="user" />
      </NavLink>
    </div>
  );
};
export default Right;
