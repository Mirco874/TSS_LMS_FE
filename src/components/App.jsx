import React from "react";
import Main from "./Main/Main";
import MainDos from "./MainDos/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/material",
      element: <MainDos />,
    },
  ]);
  return <RouterProvider router={router} />;
};
