import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";

function ImageContainer({ image, text, like }) {
  const [select, setSelect] = useState(false);
  return (
    <Grid container>
      <Grid item xs={12} style={{ height: "250px" }}>
        <Box
          boxShadow={10}
          borderRadius={15}
          style={{
            height: "100%",
            backgroundImage: `url(${image})`
          }}
        >
          {text ? (
            <Grid container style={{ height: "100%" }}>
              <Grid item xs={12}>
                <Box p={3} style={{ position: "relative", height: "100%" }}>
                  <Grid
                    container
                    style={{
                      position: "absolute",
                      bottom: "60px",
                      color: "white"
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        <Box fontWeight="fontWeightBold">
                          Ancient History Guide
                        </Box>
                      </Typography>
                      <Typography variant="subtitle1">Exibits.56</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          ) : null}
          {like ? (
            <Box p={2}>
              <Grid container>
                <Grid item xs={12}>
                  <Favorite
                    onClick={() => setSelect((select) => !select)}
                    color={select? "primary" : ''}
                    style={{ float: "right",   color: !select ? grey[50] : '' }}
                  />
                </Grid>
              </Grid>
            </Box>
          ) : null}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ImageContainer;
