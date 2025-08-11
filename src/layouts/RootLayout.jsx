import React from "react";
import { Outlet } from "react-router";
import Home from "../page/Home/Home";
import Navbar from "../page/Navbar/Navbar";
import Footer from "../page/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Home></Home>
      <Outlet />
      < Footer />
    </div>
  );
};

export default RootLayout;
