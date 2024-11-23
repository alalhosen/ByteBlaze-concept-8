import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

const router = createBrowserRouter([
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
      },
      {
        path:'/blog/:id',
        element:<Blog/>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      }

    ]
  },

])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <App/> */}
  </>,
)
