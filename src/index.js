import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#d95f27",
      light: "#d95f27",
      dark: "#d95f27",
    },
    secondary: {
      main: "#e8eded",
    },
    text: {
      primary: "#424242",
      secondary: "#76a2c5",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
