import React from "react";
import { Context } from "../../Content/HasMenu";
import NextVideos from "./NextVideos/NextVideos";
import VideoInfo from "./VideoInfo/VideoInfo";
import "./VideoPage.scss";

const VideoPage = () => {
  const { setMenu } = React.useContext(Context);

  React.useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className="video__page">
      <VideoInfo />
      <NextVideos />
    </div>
  );
};

export default VideoPage;
