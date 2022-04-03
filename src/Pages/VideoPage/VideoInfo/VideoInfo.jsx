import React from "react";
import "./VideoInfo.scss";
import { useParams } from "react-router-dom";
import { Context } from "../../../Content/Videos";
import LikeIcon from "../../../Components/Lib/Icons/Video/like.svg";
import DislikeIcon from "../../../Components/Lib/Icons/Video/dislike.svg";
import ShareIcon from "../../../Components/Lib/Icons/Video/share.svg";
import MoreIcon from "../../../Components/Lib/Icons/Video/More.png";
import Buttons from "../../../Components/Button/Button";
import AvatarImg from "../../../Assets/Images/navigate-img.png";
import { Avatar } from "@mui/material";

const VideoInfo = () => {
  const { videos } = React.useContext(Context);
  const { video_id } = useParams();

  const foundVideo = videos.find(video => video?.id === Number(video_id));
  console.log(foundVideo);
  return (
    <div className="video__info">
      <div className="video__player">
        <img className="video__info-video" src={foundVideo?.url} alt="video" />
        <div className="video__player-body">
          <h2 className="video__player-title">{foundVideo?.title}</h2>
          <div className="video__player-video-info">
            <p className="video__player-views">123k views</p>
            <div>
              <ul className="video__player-list">
                <li>
                  <button className="video__player-btns">
                    <img
                      className="video__player-btns-icon"
                      src={LikeIcon}
                      alt=""
                    />
                    <span>435k</span>
                  </button>
                </li>

                <li>
                  <button className="video__player-btns">
                    <img
                      className="video__player-btns-icon"
                      src={DislikeIcon}
                      alt=""
                    />
                    <span>123k</span>
                  </button>
                </li>

                <li>
                  <button className="video__player-btns">
                    <img
                      className="video__player-btns-icon"
                      src={ShareIcon}
                      alt=""
                    />
                    <span>Share</span>
                  </button>
                </li>
                <img className="video__player-more-btn" src={MoreIcon} alt="" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="video__info-bottom">
        <div className="video__info-user-box">
          <Avatar
            className="video__info-user-img"
            alt="Remy Sharp"
            src={AvatarImg}
            sx={{ width: 80, height: 80 }}
          />
          <div className="video__info-userinfo">
            <h3 className="video__info-username">Food & Drink</h3>
            <p className="video__info-published">Published on 14 Jun 2019</p>
            <p className="video__info-bio">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.{" "}
            </p>
            <button className="video__info-show-btn">Show more</button>
          </div>
        </div>
        <Buttons variant="subscribe video-btn" title="Subscribe 2.3m" />
      </div>
    </div>
  );
};
export default VideoInfo;
