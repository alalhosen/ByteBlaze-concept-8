import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/blogs',
          element: <Blogs />,
          loader: () => fetch('https://dev.to/api/articles?per_page=9&top=7'),
          children:[
            {
                index:true,
                element:<Content/>
            },
            {
                path:'author',
                element:<Content/>
            }
          ]
        },
        {
          path: '/blog/:id',
          element: <Blog />,
          loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        },
        {
          path: '/bookmarks',
          element: <Bookmarks />
        }
  
      ]
    },
  
  ])