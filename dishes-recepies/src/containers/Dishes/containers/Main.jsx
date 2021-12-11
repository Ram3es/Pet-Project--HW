import React, { useState } from "react";
import { Outlet } from "react-router";
import { Header, SideBar, MainContent } from "../components";
import useStyles from "./styles";

const Main = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <MainContent />
        <Outlet />
      </main>
    </div>
  );
};
export default Main;
