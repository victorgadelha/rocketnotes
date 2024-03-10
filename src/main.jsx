import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global.js";
import { ThemeProvider } from "styled-components";

//import { Details } from "./pages/Details;
//import { Home } from "./pages/Home";
//import { SignIn } from "./pages/SignIn";
//import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";

import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
);
