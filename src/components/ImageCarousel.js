import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    width: "100%", // Full-width container
  },
  carousel: {
    maxWidth: "100%",
  },
  dotList: {
    bottom: "20px", // Adjust the position as needed
  },
}));

const ImageCarousel = ({ images }) => {
  const classes = useStyles();

  return (
    <div className={classes.carouselContainer}>
      <Carousel
        className={classes.carousel}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className={`${classes.dotList} selected`}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className={classes.dotList}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
