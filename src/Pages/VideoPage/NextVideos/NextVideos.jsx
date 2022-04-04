import { Switch } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../Content/Videos";
import { useParams } from "react-router-dom";

import "./NextVideos.scss";

const NextVideos = () => {
  const { videos } = React.useContext(Context);
  const [video, setVideo] = React.useState([]);
  const { video_id } = useParams();

  React.useEffect(() => {
    if (videos.length > 0) {
      const filterVideo = videos.filter(video => video.id !== Number(video_id));
      setVideo(filterVideo.slice(28, 32));
    }
  }, [video_id, videos]);
  return (
    <div className="next__video">
      <div className="next__video-top">
        <h4 className="next__video-top-title">Next</h4>
        <p className="next__video-autoplay">
          Autoplay <Switch />
        </p>
      </div>
      <ul className="next__video-list">
        {videos.length > 0 &&
          video.map(vid => (
            <li className="next__video-item" key={vid.id}>
              <NavLink to={"/video/" + vid.id}>
                <div className="card">
                  <img
                    className="home__top-videos next__video-video"
                    src={vid.url}
                    alt="video"
                  />
                  <div className="card__body">
                    <h4 className="next__video-title">{vid.title}</h4>
                    <div className="next__video-bottom">
                      <p>80k views · 3 days ago</p>
                      <p>Dollie Blair</p>
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

export default NextVideos;
