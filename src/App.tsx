import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as Routes from "@/constants/routes";
import Home from "@/pages/Home";

const App = () => {
  const BrowserRouter = createBrowserRouter(
    [
      {
        path: Routes.HOME,
        element: <Home />,
        caseSensitive: true,
      },
    ],
    {
      basename: "/", // optional
      window: window, // optional
    }
  );

  return <RouterProvider router={BrowserRouter} />;
};

export default App;
