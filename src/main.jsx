import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global.js";
import { ThemeProvider } from "styled-components";

//import { Details } from "./pages/Details/index.jsx";
import { Home } from "./pages/Home/index.jsx";

import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
