import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/main-page/MainPage";
import StartPage from "./pages/start-page/StartPage";

const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <StartPage /> },
      { path: "/mainpage", element: <MainPage /> },
    ],
  },
]);

const Router = () => {
  const router = defaultRouter;

  return <RouterProvider router={router} />;
};

export default Router;
