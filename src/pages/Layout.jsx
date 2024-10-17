import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
