import { Grid } from "@mui/material";
import React from "react";
import HomeHeader from "../Home/components/HomeHeader";
import HomeListMess from "../Home/components/HomeListMess";

const Layout = () => {
  return (
    <div className="d-flex">
      <HomeHeader></HomeHeader>
      <Grid container>
        <Grid item>
          <HomeListMess></HomeListMess>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
