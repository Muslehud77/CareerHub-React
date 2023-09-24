import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';

import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';

import JobDetail from './Components/JobDetail/JobDetail';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: async () => {
          const res = await fetch('/jobs.json')
          const data = await res.json();
          
          return data;
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/job/:id",
         element: <JobDetail></JobDetail>,
        loader: async ({params}) => {
          const res = await fetch("/jobs.json");
          const data =await res.json();
          const job = data.find((job) => job.id == params.id);
          
          return job
        } ,
       
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
