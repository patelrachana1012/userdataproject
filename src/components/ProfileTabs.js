import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import { useParams } from "react-router-dom";
import Posts from "./Posts";
import Albums from "./Albums";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import theme1 from "./theme";
import { Margin } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    minHeight: "100vh", // Ensure full viewport height
  },
  contentContainer: {
    padding: theme.spacing(3),
    backgroundColor: theme1.palette.background.primary,
    borderRadius: theme.spacing(2),
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    marginRight: theme.spacing(3),
  },
  tabsContainer: {
    flexGrow: 1,
    backgroundColor: theme1.palette.background.secondary,
  },
  profileHeader: {
    backgroundColor: "#f00", // Bright orange color
    //color: "#f00",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
  },
  tabLabel: {
    color: theme1.palette.text.secondary,
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.profileHeader}>
              <Box>
                <div className={classes.avatarContainer}>
                  <Avatar
                    alt={user.name}
                    src={`https://i.pravatar.cc/150?u=${user.id}`}
                    className={classes.avatar}
                  />
                  <div>
                    <Typography variant="h5" style={{ marginBottom: "8px" }}>
                      {user.name}
                    </Typography>

                    <Box component="span" sx={{ display: "block" }}>
                      @{user.username}
                    </Box>
                    <Box component="span" sx={{ display: "block" }}>
                      Email: {user.email}
                    </Box>
                    {/* Display other user profile data here */}
                  </div>
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.profileHeader}>
              <Box p={1}>
                {/* Second section of profile */}
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
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                className={classes.tabsContainer}
                textColor="primary"
              >
                <Tab label="Posts" className={classes.tabLabel} />
                <Tab label="Albums" className={classes.tabLabel} />
              </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
              <Posts userId={userId} />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Albums userId={userId} />
            </TabPanel>
          </Grid>
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
