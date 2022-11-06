import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Chapter from './Chapter/Main';
import Main from './Main/Main';
import MainDos from './MainDos/Main';

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
    {
      path: "/capitulos",
      element: <Chapter />,
    },
     ]);
  return <RouterProvider router={router} />;
};
