import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/home/Home';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <>Upss..</>,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
