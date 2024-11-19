import { PATH } from '@constants/path';
import HomePage from '@pages/HomePage/HomePage';
import SplashPage from '@pages/SplashPage/SplashPage';
import Layout from '@/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: PATH.ROOT, element: <SplashPage /> },
      { path: PATH.HOME, element: <HomePage /> },
      { path: '*', element: <Navigate to={PATH.ROOT} replace={true} /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
