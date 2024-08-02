import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: "url('/images/login.jpg')" }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white bg-opacity-70 p-10 rounded-lg shadow-2xl flex flex-col items-center space-y-6 dark:bg-gray-800 dark:bg-opacity-70 dark:rounded-lg dark:shadow-2xl">
          <div className="flex-1 w-full ">
            <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:bg-opacity-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:bg-opacity-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Message
                </label>
                <textarea className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:bg-opacity-50"></textarea>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded dark:bg-blue-500 dark:text-white w-full">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
