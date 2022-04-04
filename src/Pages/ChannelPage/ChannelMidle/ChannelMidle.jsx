import React from "react";
import "./ChannelMidle.scss";
import MiddlePlayer from "./MiddlePlayer/MiddlePlayer";
import RecommChannel from "./RecommChannel/RecommChannel";
const ChannelMidle = () => {
  return (
    <div className="channel__midle">
      <MiddlePlayer />

      <RecommChannel />
    </div>
  );
};
export default ChannelMidle;
