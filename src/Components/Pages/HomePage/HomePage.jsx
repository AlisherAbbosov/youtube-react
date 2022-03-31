import HomeTop from "./HomeTop/HomeTop";
import { Context } from "../../../Content/Videos";
import React from "react";
import Recommended from "./Recommended/Recommended";
import NavigateVideos from "./NavigateVideos/NavigateVideos";

const HomePage = () => {
  const { videos, setVideos } = React.useContext(Context);
  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();
      if (data?.length > 0) {
        const vide = data.splice(1, 35);
        setVideos([...vide]);
      }
    })();
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
