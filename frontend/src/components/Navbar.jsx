import React from "react";
import { Link, useNavigate } from "react-router-dom";
import tokenService from "../server/token.service";
import authService from "../server/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const user = tokenService.getUser();
  const isAuthenticated = !!user;

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-black text-white shadow-md">
      <Link
        to="/"
        className="font-semibold text-lg tracking-wide select-none hover:opacity-80 transition"
      >
        SE NPRU Blog
      </Link>
      <div className="flex gap-3">
        {isAuthenticated ? (
          <>
            <Link to="/posts/new" className="btn btn-primary btn-sm">
              New Post
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-outline btn-sm border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
