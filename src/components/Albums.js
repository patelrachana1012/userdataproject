import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Pagination,
  Grid,
  Box,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import PhotoGallery from "./PhotoGallery";
import CardMedia from "@mui/material/CardMedia";
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
    borderRadius: theme.spacing(2),
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  link: {
    color: "#00ff00",
    "&:hover": {
      color: "primary",
      textDecoration: "underline #000000",
    },
  },
  overrides: {
    MuiCardContent: {
      root: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0,
        },
      },
    },
  },
}));

const Albums = ({ userId }) => {
  const classes = useStyles();
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albumsPerPage = 6;

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
      <Grid container spacing={3}>
        {albums.map((album) => (
          <Grid item xs={12} sm={6} md={4} style={{ display: "flex" }}>
            <Card
              key={album.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                marginBottom: 0,
                paddingBottom: 0,
              }}
              raised
              className={classes.card}
            >
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={"/album.jpeg"}
                  alt="green iguana"
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">
                    {album.title.length <= 28
                      ? album.title
                      : album.title.substr(0, 28) + "..."}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Link
                    component="button"
                    variant="contained"
                    color="primary"
                    underline="none"
                    className={classes.link}
                    onClick={() => handleViewGallery(album.id)}
                    sx={{ p: 0, fontSize: "16px" }}
                  >
                    View Gallery
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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
