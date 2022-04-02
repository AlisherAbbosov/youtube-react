import React from "react";
import "./ChannelTop.scss";
import Buttons from "../../../Button/Button";
import NotificationIcon from "../../../Lib/Icons/Channel/channel-notification.svg";
import ChannelTopImg from "../../../../Assets/Images/user-top-img.jpg";

import { Context } from "../../../../Content/UsersContent";
import { useParams } from "react-router-dom";

const ChannelTop = () => {
  const { users } = React.useContext(Context);
  const [user, setUser] = React.useState();
  const { user_id } = useParams();

  React.useEffect(() => {
    if (users?.length > 0) {
      const findUser = users.find(user => user?.id === Number(user_id));
      setUser(findUser);
    }
  }, [users, user_id]);
  return (
    <div className="channel__top">
      <img
        className="channel__top-img"
        src={ChannelTopImg}
        alt="user to image"
      />

      <div className="channel__header">
        <div className="channel__header-left">
          <img
            className="channel__header-user-avatar"
            src={user?.avatar}
            alt="user avatar"
          />
          <div>
            <h3 className="channel__header-user-name">{`${user?.first_name} ${user?.last_name}`}</h3>
            <p className="channel__header-user-subscribed">245K subscribed</p>
          </div>
        </div>
        <div className="channel__header-right">
          <img
            className="channel__header-icon"
            src={NotificationIcon}
            alt="img"
          />
          <Buttons variant="subscribe" title="Subscribe 2.3m" />
        </div>
      </div>
    </div>
  );
};

export default ChannelTop;
