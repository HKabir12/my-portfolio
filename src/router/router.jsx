import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../page/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path:"*",
    Component: ErrorPage
  }
]);

export default router;
