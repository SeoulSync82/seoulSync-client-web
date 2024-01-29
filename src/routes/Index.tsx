import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/layout';
import Home from '@/pages/home/Index';
import MyCourse from '@/pages/myCourse/Index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/my-course', element: <MyCourse /> },
    ],
  },
]);
