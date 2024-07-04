import React from "react";

import "./main-layout.css";

import { Outlet } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
