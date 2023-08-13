import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import {
  Tabs,
  Tab,
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import Posts from "./Posts";
import Albums from "./Albums";
import axios from "axios";

//import { makeStyles } from "@material-ui/core/styles";
// import theme1 from "./theme";
import { Margin } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    padding: "10px",
    // minHeight: "100vh", // Ensure full viewport height
    // padding: "-24px",
  },
  tab: {
    "& .MuiBox-root": {
      padding: "0px",
    },
  },

  contentContainer: {
    padding: theme.spacing(3),
    backgroundColor: "",
    borderRadius: theme.spacing(2),
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    // marginBottom: theme.spacing(3),\
    padding: 20,
  },
  customClass: {
    padding: "0",
    transition: "transform 0.2s", // Add a transition effect
    "&:hover": {
      transform: "scale(1.05)", // Apply scale transformation on hover
      fontWeight: "bold",
    },
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginRight: theme.spacing(3),
    "@media (max-width: 600px)": {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
  },
  tabsContainer: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.light,
    padding: 0,
  },
  tabPanelFullWidth: {
    width: "100%", // Set the width to 100%
  },
  profileHeader: {
    //backgroundColor: "#f00", // Bright orange color
    //color: "#f00",
    // padding: theme.spacing(2),
    // borderRadius: theme.spacing(2),
    // boxShadow: theme.shadows[3],
  },
  tabLabel: {
    color: theme.palette.text.secondary,
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

const ProfileTabs = () => {
  const classes = useStyles();
  const { userId } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState(null);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Container className={classes.contentContainer}>
        <Paper
          className={classes.profileHeader}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#c0cace",
            marginBottom: "15px",
          }}
        >
          <div className={classes.avatarContainer}>
            <Avatar
              alt={user.name}
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              sx={{
                width: 180,
                height: 180,
              }}
            />
          </div>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} style={{ display: "flex" }}>
              <Paper
                className={classes.profileHeader}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  width: "100%",
                  border: "1px",
                  margin: "10px",
                }}
              >
                <Box component="div" sx={{ padding: 2 }}>
                  <Typography variant="h5" style={{ marginBottom: "8px" }}>
                    {user.name}
                  </Typography>

                  <Box component="span" sx={{ display: "block" }}>
                    @{user.username}
                  </Box>
                  <Box
                    component="div"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <EmailIcon className={classes.icon} /> &nbsp; {user.email}
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} style={{ display: "flex" }}>
              <Paper
                className={classes.profileHeader}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  width: "100%",
                  border: "1px ",
                  margin: "10px",
                }}
              >
                <Box p={1}>
                  <div>
                    <Typography variant="h5" style={{ marginBottom: "8px" }}>
                      Address
                    </Typography>
                    <Box
                      component="span"
                      sx={{ display: "block", marginBottom: "6px" }}
                    >
                      {user.address.street}
                    </Box>
                    <Box component="span" sx={{ display: "block" }}>
                      <i>
                        {user.address.suite},{user.address.city},
                        {user.address.zipcode}
                      </i>
                    </Box>
                  </div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <Grid item xs={12}>
          <AppBar position="static" color="default">
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              className={classes.tabsContainer}
              textColor="primary"
              variant="fullWidth"
            >
              <Tab
                label="Posts"
                className={(classes.tabLabel, classes.customClass)}
              />
              <Tab
                label="Albums"
                className={(classes.tabLabel, classes.customClass)}
              />
            </Tabs>
          </AppBar>

          {tabValue === 0 && (
            <Box sx={{ pt: 3 }}>
              <Posts userId={userId} />
            </Box>
          )}
          {tabValue === 1 && (
            <Box sx={{ pt: 3 }}>
              <Albums userId={userId} />
            </Box>
          )}
        </Grid>
      </Container>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default ProfileTabs;
