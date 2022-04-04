import React from "react";
import "./HomeTop.scss";

import { NavLink } from "react-router-dom";
import Arrows from "../../../Components/Arrows/Arrows";

import { Context } from "../../../Content/Videos";
import { Context as UserContext } from "../../../Content/UsersContent";
import { Avatar } from "@mui/material";

const HomeTop = () => {
  const { videos } = React.useContext(Context);
  const { users } = React.useContext(UserContext);
  const [video, setVideo] = React.useState([]);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(0, 5));
      setUser(users[0]);
    }
  }, [videos]);

  return (
    <div className="home__top">
      <div className="home__top-user">
        <NavLink className="home__user" to={"/channel/" + users[0]?.id}>
          <Avatar
            className="home__user-avatar"
            src={users[0]?.avatar}
            alt="avatar"
            sx={{ width: 50, height: 50 }}
          />

          {`${users[0]?.first_name} ${users[0]?.last_name}`}
        </NavLink>

        <Arrows />
      </div>

      <ul className="home__lists">
        {videos.length > 0 &&
          video.map(vid => (
            <li className="home__top-item" key={vid.id}>
              <NavLink to={"/video/" + vid.id}>
                <div className="card">
                  <img className="home__top-videos" src={vid.url} alt="video" />
                  <div className="card__body">
                    <h4 className="card__title">{vid.title}</h4>
                    <div className="card__body-bottom">
                      <p>80k views · 3 days ago</p>
                      <p>{`${users[0]?.first_name} ${users[0]?.last_name}`}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HomeTop;
