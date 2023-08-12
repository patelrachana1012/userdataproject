import React, { Children } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import theme1 from "./theme";
const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: theme1.palette.primary.main, // Your default button color
    color: theme1.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme1.palette.text.secondary, // Your hover color
      color: theme1.palette.primary.main,
    },
  },
}));

const MyButton = () => {
  const classes = useStyles();

  return <Button className={classes.customButton}>{Children}</Button>;
};

export default MyButton;
