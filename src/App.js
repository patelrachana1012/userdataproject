import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CloseIcon from "@mui/icons-material/Close";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
// import logo from "./logo.png";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import UserList from "./components/UserList";
import ProfileDetail from "./components/ProfileDetail";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme1 from "./components/theme";
import Comments from "./components/Comments";
import Sidebar from "./components/Sidebar";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     backgroundColor: theme1.palette.primary.main,
//   },

//   drawerPaper: {
//     width: 240,
//     backgroundColor: theme.palette.primary.main,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   logoContainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: theme.spacing(2),
//   },
//   closeIcon: {
//     marginLeft: "auto",
//   },
// }));
const App = () => {
  // const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <Router>
        {/* <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar backgroundColor={theme1.palette.primary.main}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                My App
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="persistent"
            anchor="left"
            open={isDrawerOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <IconButton
              className={classes.closeIcon}
              onClick={toggleDrawer}
              color="inherit"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem button component={Link} to="/" onClick={toggleDrawer}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/users"
                onClick={toggleDrawer}
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </List>
          </Drawer>

          <main className={classes.content}>
            <div className={classes.toolbar} /> */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/profile/:userId" element={<ProfileDetail />} />
          <Route path="/post/:postId" element={<Comments />} />
          {/* Add more routes for other components if needed */}
        </Routes>

        {/* </main>
        </div> */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
