import React from "react";
import ReactDOM from "react-dom/client";
import { Details } from "./pages/Details/index.jsx";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
