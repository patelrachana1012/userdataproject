import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "#fff",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} mb={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are qstrat company, dedicated to providing the best service to
              our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 Main Street, Anytown, Canada
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", pt: 1, pb: 1 }}>
              <EmailIcon
                sx={{
                  marginRight: "8px",
                  fontSize: "36px",
                  width: "20px",
                  height: "20px",
                }}
              />{" "}
              info@example.com
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", pt: 1, pb: 1 }}>
              {" "}
              <CallIcon
                style={{
                  marginRight: "8px",
                  fontSize: "36px",
                  width: "20px",
                  height: "20px",
                }}
              />{" "}
              +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 0 }} />
        <Box mt={1}>
          <Typography variant="body1" align="left" fontSize={12}>
            {"Copyright © "}
            <Link color="inherit" href="https://qstrat.com/our-company/">
              qstrat
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
