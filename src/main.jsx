import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';



createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
