import HomeTop from "./HomeTop/HomeTop";

import React from "react";
import Recommended from "./Recommended/Recommended";
import NavigateVideos from "./NavigateVideos/NavigateVideos";

const HomePage = () => {
  return (
    <div className="home__page">
      <HomeTop />
      <Recommended />
      <NavigateVideos />
    </div>
  );
};

export default HomePage;
