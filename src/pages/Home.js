import React from "react";
import { BsCart3 } from "react-icons/bs";

function Home() {
  return (
    <main className="flex flex-col items-start mt-16 px-4 text-center ">
      <div className="flex max-md:flex-col-reverse w-full gap-6">
        <div className="basis-2/5 flex flex-col items-start">
          <h1 className="text-5xl font-bold text-gray-800 text-start leading-snug">
            It’s not just Food,
            <br />
            It’s an Experience.
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-start">
            Join us in celebrating the joy of good food, made with love and
            served with pride.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700">
            View Menu
          </button>
        </div>
        <div className="md:basis-3/5 ">
          <img
            src={`${process.env.PUBLIC_URL}/images/food.png`}
            alt="Food"
            className=" rounded-lg w-4/6 md:ml-52 ms:flex-shrink-0"
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
      <div className="text-yellow-500 text-xl mt-4 ">★★★★★</div>

      {/* cart section */}


      <div className=" flex md:gap-10 md:mt-16  md:ml-24">
        <img
          src={`${process.env.PUBLIC_URL}/images/FR.png`}
          alt="FR"
          className=" bg-[#858585] h-14 rounded-full hover:bg-blue-700"
        />

        <div className="h-56 w-40 rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <img
              src="/images/food.png"
              alt="Pizza"
              className="w-80 h-28 object-cover"
            />
            <BsCart3 className=" absolute h-8 w-8 bg-gray-900 text-white top-2 right-2 rounded-b-full  " />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">Pizza</h3>
            <p className="text-gray-600">Seafood</p>
            <p className="text-black text-2xl font-bold">$30</p>
          </div>
        </div>

        <div className="h-56 w-40 rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <img
              src="/images/tamato.png"
              alt="Pizza"
              className="w-80 h-28 object-cover"
            />
            <BsCart3 className=" absolute h-8 w-8 bg-gray-900 text-white top-2 right-2 rounded-b-full" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">Tomato Salad</h3>
            <p className="text-gray-600">Vegetable</p>
            <p className="text-black text-2xl font-bold">$20</p>
          </div>
        </div>

        <div className="h-56 w-40 rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <img
              src="/images/tamato.png"
              alt="Pizza"
              className="w-80 h-28 object-cover"
            />
            <BsCart3 className=" absolute h-8 w-8 bg-gray-900 text-white top-2 right-2 rounded-b-full" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">Pizza</h3>
            <p className="text-gray-600">Seafood</p>
            <p className="text-black text-2xl font-bold">$30</p>
          </div>
        </div>

        <div className="h-56 w-40 mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <img src="/images/tuna.png" alt="Pizza" className=" h-28" />
            <BsCart3 className=" absolute h-8 w-8 bg-gray-900 text-white top-2 right-2 rounded-b-full" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">Tuna Salad</h3>
            <p className="text-gray-600">Tuna</p>
            <p className="text-black text-2xl font-bold">$</p>
          </div>
        </div>
        <img
          src="/images/FL.png"
          alt="FR"
          className=" bg-orange-500 h-14 rounded-full hover:bg-blue-700"
        />
      </div>
    </main>
  );
}
export default Home;
