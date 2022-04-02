import React from "react";
import "./NavigateVideos.scss";
import { NavLink } from "react-router-dom";
import NavigateAvatar from "../../../../Assets/Images/navigate-img.png";
import Arrows from "../../../Arrows/Arrows";
import Buttons from "../../../Button/Button";

import { Context } from "../../../../Content/Videos";

const NavigateVideos = () => {
  const { videos } = React.useContext(Context);
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(8, 13));
    }
  }, [videos]);

  return (
    <div className="navigate">
      <div className="navigate__top">
        <div className="navigate__top-boxes">
          <NavLink className="navigate__top-boxes" to={"/chanel/"}>
            <img
              className="navigate__top-avatar"
              src={NavigateAvatar}
              alt="avatar"
            />
            <h4 className="navigate__title">Food & Drink</h4>
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
                    <p>Food & Drink</p>
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
