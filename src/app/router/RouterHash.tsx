import { Layout } from '../layout/Layout';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/home/Home';

const BASE_TITLE = ' | Mariusz Najwer';

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
        element: <Home title={`Home${BASE_TITLE}`} />,
      },
      {
        path: '*',
        element: <>Upss..</>,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
