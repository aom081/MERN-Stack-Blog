import React from "react";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

// Root layout wraps all pages with shared UI like the Navbar.
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
