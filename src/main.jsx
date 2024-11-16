import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './assets/pages/Blogs.jsx'
import Bookmarks from './assets/pages/Bookmarks';
import MainLayout from './layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>
  },
  {
    path: '/blogs',
    element: <Blogs />
  },
  {
    path: '/bookmarks',
    element: <Bookmarks/>
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <App/> */}
  </>,
)
