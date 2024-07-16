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
    loader: async ({ params }) => {
      const response = await fetch('/blogsData.json');
      const blogs = await response.json();
      const blog = blogs.find(blog => blog.id === parseInt(params.id));
      return { blog };
    },
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
