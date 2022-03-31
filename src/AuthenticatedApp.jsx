import { Grid, Item } from "@mui/material";
import React from "react";
import LeftComponent from "./Components/LeftComponent/LeftComponent";
import Navbar from "./Components/Navbar/Navbar";
import Pages from "./Components/Pages/Pages";

const AuthenticatedApp = () => {
  return (
    <div className="container">
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={1.8}>
          <LeftComponent />
        </Grid>
        <Grid item xs={10}>
          <Pages />
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthenticatedApp;
