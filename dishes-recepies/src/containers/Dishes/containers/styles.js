import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100%",
  },
  container: {},
  content: {
    flexGrow: 1,
    height: "100vh",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  appBarSpacer: {
    width: "100%",
    height: "40px",
  },
}));
// theme.mixins.toolbar
