import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/main-page/MainPage";

const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <MainPage /> }],
  },
]);

const Router = () => {
  const router = defaultRouter;

  return <RouterProvider router={router} />;
};

export default Router;
