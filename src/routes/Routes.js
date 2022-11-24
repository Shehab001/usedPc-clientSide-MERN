import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";

import Category from "../pages/Category";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";

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
    ],
  },
]);

export default router;
