import React from "react";
import Arrows from "../../../Components/Arrows/Arrows";
import "../HomeTop/HomeTop.scss";
import "./Recommended.scss";

import { Context } from "../../../Content/Videos";

import "./Recommended.scss";
import { NavLink } from "react-router-dom";

const Recommended = () => {
  const { videos } = React.useContext(Context);
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(5, 8));
    }
  }, [videos]);

  return (
    <div className="recommended">
      <div className="recommended__top">
        <h2 className="recommended__title">Recommended</h2>

        <Arrows />
      </div>

      <ul className="home__lists">
        {video.length > 0 &&
          video.map(vid => (
            <li className="recommended__item" key={vid.id}>
              <NavLink to={"/video/" + vid.id}>
                <div className="card">
                  <img
                    className="recommended__videos"
                    src={vid.url}
                    alt="video"
                  />

                  <div className="card__body">
                    <h4 className="card__title">{vid.title}</h4>

                    <div className="card__body-bottom">
                      <p>80k views · 3 days ago</p>
                      <p>Gussie French</p>
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

export default Recommended;
