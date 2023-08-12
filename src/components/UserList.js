import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Button,
  Typography,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  userDetails: {
    flexGrow: 1,
  },
  viewProfileButton: {
    marginLeft: "auto",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
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
      {displayedUsers.map((user) => (
        <Paper key={user.id} elevation={3} className={classes.userCard}>
          <Grid container alignItems="center">
            <Grid item>
              <Avatar
                alt={user.name}
                src={`https://i.pravatar.cc/100?u=${user.id}`}
                className={classes.avatar}
              />
            </Grid>
            <Grid item className={classes.userDetails}>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body1">Email: {user.email}</Typography>
              <Typography variant="body1">Username: {user.username}</Typography>
            </Grid>
            <Grid item className={classes.viewProfileButton}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/profile/${user.id}`}
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
        />
      </div>
    </div>
  );
};

export default UserList;
