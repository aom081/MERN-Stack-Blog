import React from "react";
import App from "../App.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import CreatePost from "../Pages/CreatePost.jsx";
import RootLayout from "../components/RootLayout.jsx";
import { createBrowserRouter } from "react-router-dom";

// Router with a root layout so Navbar renders inside the routing context.
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "posts/new", element: <CreatePost /> },
    ],
  },
]);

export default router;
