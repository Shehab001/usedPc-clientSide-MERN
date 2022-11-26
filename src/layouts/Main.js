import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
