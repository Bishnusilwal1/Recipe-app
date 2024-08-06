import React from "react";
import { BsCart3 } from "react-icons/bs";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";
import About from "./About";
import Footer from "../components/Footer";
import {
  FaMotorcycle,
  FaUtensils,
  FaCreditCard,
  FaGlassCheers,
} from "react-icons/fa";

function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <main className="flex flex-col items-start mt-16 px-4 text-center ">
        <div className="flex max-md:flex-col-reverse w-full gap-6">
          <div className="basis-2/5 flex flex-col items-start">
            <h1 className="text-5xl font-bold text-gray-800 text-start leading-snug  dark:text-white">
              It’s not just Food,
              <br />
              It’s an Experience.
            </h1>
            <p className="text-lg text-white-600 mt-4 text-start">
              Join us in celebrating the joy of good food, made with love and
              served with pride.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700">
              View Menu
            </button>
          </div>
          <div className="md:basis-3/5 dark:dark-mode-bg ">
            <img
              src={`${process.env.PUBLIC_URL}/images/food.png`}
              alt="Food"
              className=" rounded-lg w-4/6 md:ml-52 ms:flex-shrink-0  "
            />
          </div>
        </div>

        <p className="mt-5">Reviews</p>
        <div className="mt-1 flex items-center space-x-4">
          <div className="flex -space-x-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Review 2"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Review 3"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Review 1"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Review 4"
              className="w-12 h-12 rounded-full border-2 border-white "
            />
          </div>
        </div>
        <Rating />
        {/* <div className="flex items-center justify-center mt-8"> */}
        <Carousel />
        {/* </div> */}
        <About />

        <div className=" container mt-32 dark:border-red-700 ">
          <div className="text-center ">
            <h2 className="text-2xl font-bold ">Amenities</h2>

            <div className="flex justify-center space-x-40 mt-20">
              <div className="text-center ">
             
                  <div className="bg-slate-200 w-44 h-52 flex justify-center items-center rounded-3xl dark:bg-gray-600 dark:border-[4px] dark:border-red-500 border-[4px] border-gray-500" >
                    <FaMotorcycle className="text-9xl text-orange-500  " />
                  </div>
           

                <p className="font-bold mt-4">Home Delivery</p>
              </div>
              <div className="text-center ">
                <div className="bg-slate-200 w-44 h-52 flex justify-center items-center rounded-3xl dark:bg-gray-600 dark:border-[4px] dark:border-red-500 border-[4px] border-gray-500">
                  <FaUtensils className="text-9xl text-orange-500 " />
                </div>
                <p className="font-bold mt-4">Take Away</p>
              </div>

              <div className="text-center">
                <div className="bg-slate-200 w-44 h-52 flex justify-center items-center rounded-3xl dark:bg-gray-600 dark:border-[4px] dark:border-red-500 border-[4px] border-gray-500">
                  <FaCreditCard className="text-9xl text-orange-500 " />
                </div>

                <p className="font-bold mt-4">Payment Modes</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-200 w-44 h-52 flex justify-center items-center rounded-3xl dark:bg-gray-600 dark:border-[4px] dark:border-red-500 border-[4px] border-gray-500">
                  <FaGlassCheers className="text-9xl text-orange-500 " />
                </div>

                <p className="font-bold mt-4">Party Orders</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-30">
          <h2 className="text-2xl font-bold mb-4 mt-32 ">Gallery</h2>
          <div className="grid grid-cols-4 gap-6 mt-20">
            <img
              src="/images/food1.png"
              alt="Food 1"
              className="w-full h-auto rounded-lg bg-gray-900"
            />
            <img
              src="/images/food2.png"
              alt="Food 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/food3.png"
              alt="Food 3"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/food1.png"
              alt="Food 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/food2.png"
              alt="Food 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/food3.png"
              alt="Food 3"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/food1.png"
              alt="Food 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/images/food2.png"
              alt="Food 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
export default Home;
