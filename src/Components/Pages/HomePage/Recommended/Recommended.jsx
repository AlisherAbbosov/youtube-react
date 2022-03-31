import React from "react";
import Arrows from "../../Arrows/Arrows";
import "../HomeTop/HomeTop.scss";
import "./Recommended.scss";

import { Context } from "../../../../Content/Videos";

import "./Recommended.scss";
import { NavLink } from "react-router-dom";

const Recommended = () => {
  const { videos, setVideos } = React.useContext(Context);
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(5, 8));
    }
  }, [videos]);
  console.log(video);
  return (
    <div className="recommend">
      <div className="recommend__top">
        <h2 className="recommend__title">Recommended</h2>
        <Arrows />
      </div>
      <ul className="home__lists">
        {video.length > 0 &&
          video.map(vid => (
            <NavLink
              key={vid.id}
              to={"/video/" + vid.id}
              className="recommend__item"
            >
              <div className="card">
                <img className="recommend__videos" src={vid.url} alt="video" />
                <div className="card__body">
                  <h4 className="card__title">{vid.title}</h4>
                  <div className="card__body-bottom">
                    <p>80k views · 3 days ago</p>
                    <p>Gussie French</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default Recommended;