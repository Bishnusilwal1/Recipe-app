import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-black dark:text-white">
                F<span className="text-orange-500 dark:text-white">o</span>ody
              </span>
            </div>
            <div className="mt-3 hidden md:ml-6 md:flex md:space-x-8">
              <Link
                className="ml-40 text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
                to="/menu"
              >
                Menu
              </Link>
              <Link
                className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
                to="/recipes"
              >
                Recipes
              </Link>
              <Link
                className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="text-orange-500 hover:text-orange-600 p-2 rounded-md focus:outline-none ml-64"
          >
            {darkMode ? (
              <HiOutlineSun className="h-6 w-6" />
            ) : (
              <HiOutlineMoon className="h-6 w-6" />
            )}
          </button>

          <div className="flex items-center">
            <div className="hidden md:flex md:space-x-4">
              <Link
                to="/register"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Login
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-orange-500 hover:text-orange-600 p-2 rounded-md focus:outline-none"
              >
                {isOpen ? (
                  <HiOutlineX className="h-6 w-6" />
                ) : (
                  <HiOutlineMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute bg-white dark:bg-gray-800 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="block text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className="block text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              to="/recipes"
            >
              Recipes
            </Link>
            <Link
              className="block text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="block text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="block text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="block text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
              to="/login"
            >
              Login
            </Link>
            <button
              onClick={toggleDarkMode}
              className="block w-full text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
