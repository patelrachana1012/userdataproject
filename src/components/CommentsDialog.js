import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
  makeStyles,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  comment: {
    marginBottom: theme.spacing(2),
  },
}));

const CommentsDialog = ({ open, onClose, post }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Comments for "{post.title}"</DialogTitle>
      <DialogContent>
        {post.comments.map((comment, index) => (
          <div key={comment.id} className={classes.comment}>
            <Typography variant="subtitle1">{comment.name}</Typography>
            <Typography variant="body2">{comment.body}</Typography>
            {index !== post.comments.length - 1 && <Divider />}
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentsDialog;
