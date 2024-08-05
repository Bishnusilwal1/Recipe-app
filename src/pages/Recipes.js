import React from 'react';

const Recipes = () => {
  return (
    <div className='mt-9'>
    <div className="flex flex-col lg:flex-row lg:justify-between items-center p-4 lg:p-8 max-w-7xl mx-auto dark:bg-gray-700">
      <div className="w-full lg:w-2/3 ">
        <img src="/images/food.png" alt="Ultimate Nigerian Cookbook" className="w-full rounded-lg"/>
      </div>
      <div className="w-full lg:w-2/3 lg:pl-8 mt-6 lg:mt-0">
        <h1 className="text-3xl font-bold">Ultimate Nigerian Cookbook</h1>
        <p className="text-xl font-medium text-gray-700 mt-2">By: Chy Anegbu</p>
        
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Recipe Book Features:</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-white">
            <li>75 delicious Nigerian recipes.</li>
            <li>From 28 of Chy's leading cookbooks.</li>
            <li>Experience Chy's special tradition of wonderful food in your own kitchen.</li>
          </ul>
        </div>
        
        <div className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
          Price: <span className="text-green-500">$150</span>
        </div>
        
        <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 focus:outline-none dark:text-white">
          Purchase Recipe Book
        </button>
        <div className=' mt-10'>
        <h1 className='text-black dark:text-white font-semibold'>Description</h1>
        <p className='text-black dark:text-white'> Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.Antipasto traditionally was believed to stimulate the appetite before the main meal. Particularly in restaurants, the colour and flavour of the foods in antipasto are important considerations for presentation and for pairing with the meal that follows.</p>
      </div>
      </div>
      
    </div>
    </div>
  );
};

export default Recipes;
