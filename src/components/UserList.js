import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import {
  Paper,
  Grid,
  Avatar,
  Button,
  Typography,
  Pagination,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { getUsers } from "./api";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px auto",
    maxWidth: 800,
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  userCard: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  userDetails: {
    flexGrow: 1,
  },
  viewProfileButton: {
    // marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%", // Full-width on xs screens
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * usersPerPage;
  const displayedUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", pt: 1, pb: 1 }}
      >
        User Data
      </Typography>
      {displayedUsers.map((user) => (
        <Paper key={user.id} elevation={3} className={classes.userCard}>
          <Grid
            container
            alignItems="center"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Grid item>
              <Avatar
                alt={user.name}
                src={`https://i.pravatar.cc/100?u=${user.id}`}
                className={classes.avatar}
                sx={{ height: "65px", width: "65px" }}
              />
            </Grid>
            <Grid item className={classes.userDetails}>
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {user.name}
              </Typography>
              <Typography variant="body1" sx={{ display: "flex" }}>
                {" "}
                <EmailIcon
                  className={classes.icon}
                  sx={{
                    marginRight: "8px",
                    fontSize: "36px",
                    width: "20px",
                    height: "20px",
                  }}
                />{" "}
                {user.email}
              </Typography>
              <Typography variant="body1" sx={{ display: "flex" }}>
                <LanguageIcon
                  className={classes.icon}
                  sx={{
                    marginRight: "8px",
                    fontSize: "36px",
                    width: "20px",
                    height: "20px",
                  }}
                />{" "}
                {user.website}
              </Typography>
              <Typography variant="body1" sx={{ display: "flex" }}>
                <CallIcon
                  className={classes.icon}
                  style={{
                    marginRight: "8px",
                    fontSize: "36px",
                    width: "20px",
                    height: "20px",
                  }}
                />{" "}
                {user.phone}
              </Typography>
            </Grid>
            <Grid item className={classes.viewProfileButton}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.viewProfileButton}
                sx={{ marginTop: { xs: "10px", md: "0" } }}
              >
                View Profile
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <div className={classes.pagination}>
        <Pagination
          count={Math.ceil(users.length / usersPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default UserList;
