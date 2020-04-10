import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { red } from '@material-ui/core/colors';

import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette:{
    primary: {
      main: red[900]
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
