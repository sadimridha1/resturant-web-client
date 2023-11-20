import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../LayOut/MainLayout";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        }
      ]
    },
  ]);