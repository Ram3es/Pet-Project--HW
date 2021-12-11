import React from "react";
import { useNavigate } from "react-router";
import classnames from "classnames";
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { publicRoutes } from "../../../../../router";
import useStyles from "./styles";

const SideBar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const renderListItems = (parentRoutePath, route) => {
    const { icon, path, label } = route;

    const fullPath = parentRoutePath ? `${parentRoutePath}${path}` : path;

    return (
      <ListItem
        dense={Boolean(parentRoutePath)}
        key={fullPath}
        onClick={() => navigate(fullPath)}
        button
        className={classnames(classes.nav, {
          [classes.childNav]: parentRoutePath,
        })}
      >
        {parentRoutePath ? null : <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItem>
    );
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classnames(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton size="small" onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.nestedListSubheader} component="nav" aria-labelledby="nested-list-subheader">
        {publicRoutes.map((route) => (
          <React.Fragment key={Math.random()}>{renderListItems(null, route)}</React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};
export default SideBar;
