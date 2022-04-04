import React from "react";
import "./Right.scss";

import AddVideoIcon from "../../Lib/Icons/Navbar/add-video.svg";
import MoreIcon from "../../Lib/Icons/Navbar/more.svg";
import NotiIcon from "../../Lib/Icons/Navbar/notification.svg";
import userImg from "../../Lib/Icons/Navbar/user-img.png";
import UserOptions from "../../UserOptions/UserOptions";

const Right = () => {
  const [isShow, setShow] = React.useState(false);
  console.log(isShow);
  return (
    <div className="navbar__right">
      <div
        className={`overlay ${isShow ? "overlay--open" : " "}`}
        onClick={() => setShow(false)}
      ></div>

      <div className="navbar__right-icons">
        <img className="navbar__right-icon" src={AddVideoIcon} alt="addicon" />
        <img className="navbar__right-icon" src={MoreIcon} alt="more" />
        <img className="navbar__right-icon" src={NotiIcon} alt="Noti" />
      </div>

      <button className="navbar__right-icon" onClick={() => setShow(true)}>
        <img className="navbar__right-icon" src={userImg} alt="user" />
      </button>

      <UserOptions isShow={isShow} />
    </div>
  );
};
export default Right;
