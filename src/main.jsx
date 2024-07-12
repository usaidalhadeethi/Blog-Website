import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import SingleBlog from './components/BlogParentChildComponents/Blog Section Components/SingleBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs/:id",
    element: <SingleBlog />,
    loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`).then(res => res.json()),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
