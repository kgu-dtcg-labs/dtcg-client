import { PATH } from '@constants/path';
import HomePage from '@pages/HomePage/HomePage';
import Layout from '@/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';
import ErrorPage from '@pages/ErrorPage/ErrorPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: PATH.ROOT, element: <HomePage /> },
      { path: '*', element: <Navigate to={PATH.ROOT} replace={true} /> },
    ],
  },
]);

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
