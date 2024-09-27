import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/layout';
import Home from '@/pages/home/Index';
import MyCourse from '@/pages/myCourse/Index';
import AIRecommend from '@/pages/AIRecommend/Index';
import Community from '@/pages/community/Index';
import Profile from '@/pages/profile/Index';
import Login from '@/pages/login/Index';
import MyCourseDetail from '@/pages/myCourse/detail';
import MyCourseList from '@/pages/myCourse/list';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/myCourse',
        element: <MyCourse />,
        children: [
          { index: true, element: <MyCourseList /> },
          { path: 'detail/:courseId', element: <MyCourseDetail /> },
        ],
      },
      { path: '/AIRecommend', element: <AIRecommend /> },
      { path: '/community', element: <Community /> },
      { path: '/profile', element: <Profile /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);
