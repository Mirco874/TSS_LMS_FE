import React from "react";
import Main from "./Main/Main";
import MainDos from "./MainDos/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import MainTres from "./MainTres/Main";
import MainCuatro from "./MainCuatro/Main";
import MainCinco from "./MainCinco/Main";
import MainSeis from "./MainSeis/Main";
import MainSiete from "./MainSiete/Main";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/pdfCap1",
      element: <MainDos />,
    },
    {
      path: "/pdfCap2",
      element: <MainTres />,
    },
    {
      path: "/pdfCap3",
      element: <MainCuatro />,
    },
    {
      path: "/pdfCap4",
      element: <MainCinco />,
    },
    {
      path: "/pdfCap5",
      element: <MainSeis />,
    },
    {
      path: "/pdfCap6",
      element: <MainSiete />,
    },
  ]);
  return <RouterProvider router={router} />;
};
