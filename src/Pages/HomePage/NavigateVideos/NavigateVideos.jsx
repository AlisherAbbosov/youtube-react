import React from "react";
import "./NavigateVideos.scss";
import { NavLink } from "react-router-dom";
import NavigateAvatar from "../../../Assets/Images/navigate-img.png";
import Arrows from "../../../Components/Arrows/Arrows";
import Buttons from "../../../Components/Button/Button";

import { Context } from "../../../Content/Videos";
import { Context as UserContext } from "../../../Content/UsersContent";
import { Avatar } from "@mui/material";

const NavigateVideos = () => {
  const { videos } = React.useContext(Context);
  const { users } = React.useContext(UserContext);
  const [video, setVideo] = React.useState([]);
  const [number, setNumber] = React.useState();

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(8, 13));
      setNumber(Math.floor(Math.random() * 6));
    }
  }, [videos]);

  return (
    <div className="navigate">
      <div className="navigate__top">
        <div className="navigate__top-boxes">
          <NavLink
            className="navigate__top-boxes"
            to={"/channel/" + users[3]?.id}
          >
            <Avatar
              className="home__user-avatar"
              src={users[3]?.avatar}
              alt="avatar"
              sx={{ width: 50, height: 50 }}
            />
            <h4 className="navigate__title">
              {`${users[3]?.first_name} ${users[3]?.last_name}`}
            </h4>
          </NavLink>
          <p className="navigate__text">Recommended channel for you</p>
        </div>
        <div className="navigate__top-boxes">
          <Buttons title="Subscribe 2.3m" variant="subscribe homeBtn" />
          <Arrows />
        </div>
      </div>
      <ul className="home__lists">
        {videos.length > 0 &&
          video.map(vid => (
            <NavLink
              className="home__top-item"
              to={"/video/" + vid.id}
              key={vid.id}
            >
              <div className="card">
                <img className="home__top-videos" src={vid.url} alt="video" />
                <div className="card__body">
                  <h4 className="card__title">{vid.title}</h4>
                  <div className="card__body-bottom">
                    <p>80k views · 3 days ago</p>
                    <p>{`${users[3]?.first_name} ${users[3]?.last_name}`}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default NavigateVideos;
