import React from "react";
import Grid from "@material-ui/core/Grid";
import ImageContainer from "./ImageContainer";
import { Typography, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            <Box fontWeight="fontWeightBold">Collections</Box>
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} text />
            </Grid>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} text />
            </Grid>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} text />
            </Grid>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} text />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            <Box fontWeight="fontWeightBold">Recommendations</Box>
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} like />
            </Grid>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} like />
            </Grid>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} like />
            </Grid>
            <Grid item md={3} xs={12}>
              <ImageContainer image={require("./sculp2.jpg")} like />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box p={3}>
        <Link to="/route" style={{textDecoration: 'none'}}>
          <Button variant="contained" color="secondary">
            Click me to dislay route usage
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Home;
