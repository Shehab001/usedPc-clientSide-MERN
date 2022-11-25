import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddProduct from "../pages/seller/AddProduct";
import Blogs from "../pages/Blogs";

import Category from "../pages/Category";
import Login from "../pages/Login";
import MyOrders from "../pages/MyOrders";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";
import Dashboard from "../pages/seller/Dashboard";
import Dashboardd from "../pages/admin/Dashboardd";
import Error from "../shared/Error";
import Loader from "../pages/seller/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
      },
      {
        path: "/categories",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/sellerdashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admindashboard",
        element: <Dashboardd></Dashboardd>,
      },
      {
        path: "/loader",
        element: <Loader></Loader>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
