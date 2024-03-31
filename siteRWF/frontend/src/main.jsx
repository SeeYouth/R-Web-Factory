import "./index.scss";

import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./pages/App";
import Realization from "./pages/Realization";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/realization",
    element: <Realization />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
