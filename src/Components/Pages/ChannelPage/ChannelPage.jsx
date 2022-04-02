import React from "react";
import ChannelMidle from "./ChannelMidle/ChannelMidle";

import "./ChannelPage.scss";
import ChannelTop from "./ChannelTop/ChannelTop";
import ChannelVideos from "./ChannelVideos/ChannelVideos";

const ChannelPage = () => {
  return (
    <div className="channel">
      <ChannelTop />
      <ChannelMidle />
      <ChannelVideos />
    </div>
  );
};

export default ChannelPage;
