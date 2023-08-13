import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const CommentsDialog = ({ comments, postTitle }) => {
  return (
    <div>
      <Typography variant="h6">{postTitle}</Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontStyle="italic">
                  {comment.name}
                </Typography>
              }
              secondary={comment.body}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CommentsDialog;
