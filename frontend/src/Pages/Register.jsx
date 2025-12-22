import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../Context/UserContext.jsx";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const {userInfo } = useContext(UserContext);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((user) => ({ ...user, [name]: value }));
    setError("");
    setSuccess("");
  };

  const validate = () => {
    if (!form.username.trim() || !form.password.trim()) {
      return "Username and password are required";
    }
    if (form.username.length < 3) {
      return "Username must be at least 3 characters";
    }
    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: validationError,
      });
      return;
    }

    try {
      setLoading(true);

      // TODO: replace this with real API call
      await Swal.fire({
        icon: "success",
        title: "Registered",
        text: "Account created successfully",
      });

      setSuccess("Account created successfully");
      setForm({ username: "", password: "" });
      navigate("/login");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="card bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Register</h2>

          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="alert alert-success">
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  className="input input-bordered w-full pr-10"
                  placeholder="Enter password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Registering..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
