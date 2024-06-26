import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AirPressure } from "../pages/airPressure/index"
import { Container } from "../pages/airCondition"
import {EditorContainer} from "../pages/editor"
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
      // 空压
      {
        path: "/airpresure",
        element: <AirPressure />,
      },
      // 空调
      {
        path: "/aircondition",
        element: <Container />,
      },
      // 首页
      {
        path: "/home",
        element: <Home />,
      },
      {
        path:"/editor",
        element: <EditorContainer />
      }
    ],
  },
]

const router:any = createBrowserRouter(routes, {
	basename: '/'
});

export default router;
