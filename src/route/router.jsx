import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../LayOut/MainLayout";
import Login from "../Pages/Login/Login";
import OurMenu from "../Pages/OurMenu/OurMenu";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'ourmenu',
          element: <OurMenu />
        }
      ]
    },
  ]);