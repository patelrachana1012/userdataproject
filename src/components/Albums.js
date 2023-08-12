import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Pagination,
} from "@mui/material";
import axios from "axios";
import PhotoGallery from "./PhotoGallery";
import { makeStyles } from "@material-ui/core/styles";
import theme1 from "./theme";
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main, // Set the background color
    borderRadius: theme.spacing(2),
  },
  cardContent: {
    backgroundColor: theme1.palette.secondary.main,
    display: "flex",
    justifyContent: "space-between", // Align items to the end of the card
    alignItems: "center", // Vertically center the button
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
}));

const Albums = ({ userId }) => {
  const classes = useStyles();
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albumsPerPage = 5; // Number of albums to display per page

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       const usersData = await getPosts(userId, page, postsPerPage);
  //       setPosts(usersData);
  //     };
  //     fetchPosts();
  //   }, [userId, page]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}&_page=${page}&_limit=${albumsPerPage}`
      )
      .then((response) => {
        setAlbums(response.data);
        setTotalPages(
          Math.ceil(response.headers["x-total-count"] / albumsPerPage)
        );
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, [userId, page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleViewGallery = (albumId) => {
    setSelectedAlbum(albumId);
  };

  const handleCloseGallery = () => {
    setSelectedAlbum(null);
  };

  return (
    <div>
      {albums.map((album) => (
        <Card key={album.id} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">{album.title}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleViewGallery(album.id)}
              //   style={{ backgroundColor: theme1.palette.primary.main }}
            >
              View Gallery
            </Button>
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
      <PhotoGallery
        albumId={selectedAlbum}
        open={selectedAlbum !== null}
        onClose={handleCloseGallery}
      />
    </div>
  );
};

export default Albums;
