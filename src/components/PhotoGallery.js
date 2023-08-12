import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import theme1 from "./theme";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  galleryItem: {
    marginBottom: theme.spacing(2),
    maxWidth: "100%",
    height: "auto",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  cardContent: {
    backgroundColor: theme1.palette.background.primary,
  },
}));

const PhotoGallery = ({ albumId, open, onClose }) => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (open) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => {
          setPhotos(response.data);
        })
        .catch((error) => {
          console.error("Error fetching photos:", error);
        });
    }
  }, [albumId, open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={2}>
          {photos.map((photo) => (
            <Grid item xs={12} sm={6} md={4} key={photo.id}>
              <Card className={classes.galleryItem}>
                <CardMedia
                  component="img"
                  alt={photo.title}
                  image={photo.url}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGallery;
