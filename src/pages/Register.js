import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100 ">
      <div className="w-full max-w-md p-8 space-y-4 bg-white border border-gray-200 rounded-lg shadow-2xl sm:p-10 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Registration
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-white">
          Let's create an account
        </p>

        <button className="w-full py-2 mt-4 text-sm font-medium  text-gray-600 bg-white-500 border rounded-l dark:text-gray-200 dark:bg-gray-700">
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
            or register with email
          </span>
          <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
        </div>

        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <input
            type="password"
            placeholder="Your Password"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:bg-purple-600"
          >
            Register
          </button>
        </form>

        <Link to="/login">
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-white">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-500 no-underline ark:text-blue-400"
            >
              Sign Up
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
