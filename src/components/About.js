import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImageCarousel from "./ImageCarousel";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const About = () => {
  const classes = useStyles();
  const img1 = process.env.PUBLIC_URL + "/img1.jpeg";
  const img2 = process.env.PUBLIC_URL + "/img2.jpeg";
  const img3 = process.env.PUBLIC_URL + "/img3.jpeg";
  const carouselImages = [img1, img2, img3];

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <ImageCarousel images={carouselImages} />
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          cursus, lectus at convallis auctor, ipsum metus malesuada libero, et
          varius arcu purus vel justo.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
