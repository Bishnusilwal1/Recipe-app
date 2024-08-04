// import React from 'react';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-white text-black p-6 w-full bg-[#F9F9F9] mt-10">
      <div className="container mx-auto ">
        <div className="flex space-x-9 mt-7">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-black dark:text-white">
              F<span className="text-orange-500 dark:text-white">o</span>ody
            </span>
          </div>
          <div className="mt-3 hidden md:ml-6 md:flex md:space-x-10 container justify-center ">
            <Link
              className="ml-40 text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
              to="/about"
            >
              About US
            </Link>
            <Link
              className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
              to="/"
            >
              Services
            </Link>
            <Link
              className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
              to="/about"
            >
              Privacy policy
            </Link>
            <Link
              className="text-gray-900 dark:text-white hover:text-orange-500 px-3 py-2 text-sm font-medium"
              to="/contact"
            >
              Terms
            </Link>
          </div>
          <div></div>
          <RiFacebookBoxFill className=" w-8 h-24 ml-[1100px]" />
          <FaSquareInstagram className=" w-7 h-24" />
        </div>

        <hr className="border-b border-gray-600 my-4 w-full" />

        <div className="flex justify-center space-x-[900px]">
          <a
            href="#"
            className="text-gray-700 hover:text-white dark:text-white"
          >
            © 2024 Foody
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-white dark:text-white"
          >
            Crafted By Kurma Tech
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
