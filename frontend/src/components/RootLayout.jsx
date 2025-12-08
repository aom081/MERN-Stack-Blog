import React from "react";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

// Root layout wraps all pages with shared UI like the Navbar.
const RootLayout = () => {
  return (
    <div className="site-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
