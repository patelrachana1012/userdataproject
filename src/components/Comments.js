import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  commentsContainer: {
    marginTop: theme.spacing(4),
  },
}));

const Comments = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch post details based on postId
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));

    // Fetch comments based on postId
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <Container className={classes.commentsContainer}>
      <Typography variant="h4" gutterBottom>
        Comments for Post: {post.title}
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.name} secondary={comment.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Comments;
