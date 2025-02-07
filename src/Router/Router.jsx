import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import { path } from 'framer-motion/client';
import Home from '../Pages/Home/Home';
import ProjectDetails from '../Pages/projects/ProjectDetails';
import About from '../Pages/About/About';

import Contact from '../Pages/Contact/Contact';
import Project from '../Pages/projects/Project';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
       {
        path:"/",
        element:<Home></Home>

       },
       {
        path:'/about',
        element:<About></About>
       },
       {
        path:`/project/:id`,
        element:<ProjectDetails></ProjectDetails>
       }
       ,{
        path:'/project',
        element:<Project></Project>
       }
       ,{
        path:'/contact',
        element:<Contact></Contact>
       }

      ]
    },
  ]);

