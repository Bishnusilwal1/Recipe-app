import React from 'react';

const About = () => {
  return (
    <div className=" items-center justify-center  ">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center p-4 lg:p-8 max-w-7xl mx-auto dark:bg-gray-700">
        <div className="lg:w-1/2">
          <img src="images/food.png" alt="About Us" className="rounded-lg shadow-lg w-full object-cover h-96" />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            Our restaurant features a unique garden setting, allowing guests to enjoy their meals amidst lush greenery and vibrant blooms. Whether you're dining under the stars in our outdoor garden or savoring a meal in our elegant indoor space, Lavie Garden provides the perfect backdrop for any occasion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
