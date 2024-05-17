import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import {Container} from "../pages/editor/index"
import { Home } from "../pages/home/index"
import Layout from '../layouts';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      // 	index: true,
      // 	element: <Navigate to='home' />
      // },
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]

const router:any = createBrowserRouter(routes, {
	basename: '/'
});

export default router;
