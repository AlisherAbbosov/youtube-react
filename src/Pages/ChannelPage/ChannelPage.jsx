import React from "react";
import ChannelMidle from "./ChannelMidle/ChannelMidle";

import "./ChannelPage.scss";
import ChannelTop from "./ChannelTop/ChannelTop";
import ChannelVideos from "./ChannelVideos/ChannelVideos";
import { Context } from "../../Content/HasMenu";

const ChannelPage = () => {
  const { setMenu } = React.useContext(Context);

  React.useEffect(() => {
    setMenu(true);
  }, []);
  return (
    <div className="channel">
      <ChannelTop />
      <ChannelMidle />
      <ChannelVideos />
    </div>
  );
};

export default ChannelPage;
