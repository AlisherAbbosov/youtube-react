import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../Content/Videos";
import { Context as UsersContext } from "../../../Content/UsersContent";
import { useParams } from "react-router-dom";

import "./ChannelVideos.scss";

const ChannelVideos = () => {
  const { videos } = React.useContext(Context);
  const { users } = React.useContext(UsersContext);
  const [video, setVideo] = React.useState([]);

  const { user_id } = useParams();

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(13, 18));
    }
  }, [videos]);

  const findUser = users.find(user => user.id === Number(user_id));

  return (
    <div>
      <h3 className="channel__videos-title">{`${
        findUser?.first_name || "Food &"
      } ${findUser?.last_name || "Drink"} videos `}</h3>
      <ul className="home__lists">
        {video.length > 0 &&
          video.map(vid => (
            <NavLink
              className="home__top-item"
              to={"/video/" + vid?.id}
              key={vid?.id}
            >
              <div className="card">
                <img className="home__top-videos" src={vid?.url} alt="video" />
                <div className="card__body">
                  <h4 className="card__title">{vid?.title}</h4>
                  <div className="card__body-bottom">
                    <p>80k views · 3 days ago</p>
                    <p>{`${findUser?.first_name || "Food &"} ${
                      findUser?.last_name || "Drink"
                    } `}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default ChannelVideos;
