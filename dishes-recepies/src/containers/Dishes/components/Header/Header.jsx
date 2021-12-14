import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { publicRoutes } from "../../../../router";

import { Toolbar, IconButton, Typography, Button, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classnames from "classnames";

import useStyles from "./styles";

const Header = ({ open, setOpen }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [headerTitle, setTitle] = useState("");

  useEffect(() => {
    const activeRoute = publicRoutes.find((route) => route.path === pathname);
    activeRoute && setTitle(activeRoute.label)

  }, [pathname]);

  return (
    <AppBar color="secondary" position="absolute" className={classnames(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar} variant="dense">
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          className={classnames(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {headerTitle ? headerTitle : ""}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
