import { createBrowserRouter } from "react-router-dom";

import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "new", element: <New /> },
  { path: "profile", element: <Profile /> },
  { path: "details/:id", element: <Details /> },
]);
