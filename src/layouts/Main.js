import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Loader from "../pages/seller/Loader";
import Header from "../shared/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
