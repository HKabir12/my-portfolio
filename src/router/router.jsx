import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export default router;
