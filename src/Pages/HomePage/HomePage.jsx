import HomeTop from "./HomeTop/HomeTop";

import React from "react";
import Recommended from "./Recommended/Recommended";
import NavigateVideos from "./NavigateVideos/NavigateVideos";
import { Context } from "../../Content/HasMenu";

const HomePage = () => {
  const { setMenu } = React.useContext(Context);

  React.useEffect(() => {
    setMenu(true);
  }, []);
  return (
    <div className="home__page">
      <HomeTop />
      <Recommended />
      <NavigateVideos />
    </div>
  );
};

export default HomePage;
