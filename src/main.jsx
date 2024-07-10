import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from './pages/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // children :[
    //   {
    //     path: '/',
    //     element: <Blogs/>
    //   },
    //   {
    //     path: 'blogs',
    //     element: <Blogs/>
    //   }
    // ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
