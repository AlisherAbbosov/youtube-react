import { Grid } from "@mui/material";
import React from "react";
import LeftComponent from "./Components/LeftComponent/LeftComponent";
import Navbar from "./Components/Navbar/Navbar";
import Pages from "./Pages/Pages";

import { Context } from "./Content/Videos";
import { Context as MenuContext } from "./Content/HasMenu";

const AuthenticatedApp = () => {
  const { setVideos } = React.useContext(Context);
  const { menu } = React.useContext(MenuContext);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();
      if (data?.length > 0) {
        const vide = data.slice(0, 35);
        setVideos([...vide]);
      }
    })();
  }, [setVideos]);

  return (
    <div className="container">
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={menu && 1.8}>
          <LeftComponent />
        </Grid>
        <Grid item xs={menu && 10.2}>
          <Pages />
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthenticatedApp;
