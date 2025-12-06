import React from "react";
import { Link } from "react-router-dom";

// Simple black navigation bar with logo text on the left and two action buttons on the right.
// Uses Tailwind + DaisyUI utility classes already imported in the project.
// To customize further, adjust classes or wrap in a header element.
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-black text-white shadow-md">
      <Link
        to="/"
        className="font-semibold text-lg tracking-wide select-none hover:opacity-80 transition"
      >
        SE NPRU Blog
      </Link>
      <div className="flex gap-3">
        <Link
          to="/posts/new"
          className="btn btn-primary btn-sm"
        >
          New Post
        </Link>
        <Link
          to="/register"
          className="btn btn-outline btn-sm border-white text-white hover:bg-white hover:text-black transition-colors"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="btn btn-sm bg-white text-black hover:bg-gray-200 border-transparent transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
