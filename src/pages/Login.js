import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white border border-gray-200 rounded-lg shadow-2xl sm:p-10 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Welcome Back!
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-white">
          Sign in by entering the information below
        </p>

        <button className="w-full py-2 mt-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-600 dark:text-white">
          <span className="inline-flex items-center">
            <img
              className="w-5 h-5 mr-2"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
            />
            Continue with Google
          </span>
        </button>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
          <span className="text-xs text-gray-500 uppercase dark:text-white">
            or login with email
          </span>
          <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
        </div>

        <form onSubmit={handleLogin} className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline dark:text-white"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:bg-purple-600"
          >
            Login
          </button>
        </form>

        <Link to="/register">
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-white">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:underline dark:text-blue-400">
              Sign Up
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
