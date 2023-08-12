import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Pagination,
  Divider,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import theme1 from "./theme";
import CommentIcon from "@mui/icons-material/Comment";
import Tooltip from "@mui/material/Tooltip";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme1.palette.secondary.main, // Set the background color
    borderRadius: theme.spacing(1),
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  dateContainer: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
  rightAlign: {
    textAlign: "right", // Align content to the right
  },
  cardContent: {
    padding: theme.spacing(2),
    backgroundColor: "theme1.palette.secondary.main",
    color: "#293132",
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    verticalAlign: "middle", // Adjust icon alignment
    marginRight: theme.spacing(1), // Add some spacing after the icon
  },
  cardText: {
    fontWeight: "bolder",
  },
}));

const PostComponent = ({ post }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
};

const Posts = ({ userId }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const postsPerPage = 5; // Number of posts to display per page

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_page=${page}&_limit=${postsPerPage}`
      )
      .then((response) => {
        setPosts(response.data);
        setTotalPages(
          Math.ceil(response.headers["x-total-count"] / postsPerPage)
        );
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [userId, page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={classes.cardText}>
              {post.title}
            </Typography>
            <Typography variant="caption" className={classes.dateContainer}>
              Posted on: 10/08/2023 at 4:55 PM
            </Typography>
            <Divider />
            <Typography variant="body1">{post.body}</Typography>
            <div className={classes.iconContainer}>
              <Link to={`/post/${post.id}`}>
                <Tooltip title="View Comments">
                  {" "}
                  <CommentIcon className={classes.icon} />
                </Tooltip>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className={classes.pagination}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Posts;
