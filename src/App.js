import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";


// function App() {
//   const [currentNav, setCurrentNav] = useState(undefined);
//   return (
//     <div className="App">
//       {}

//       {currentNav == undefined ? (
//         <></>
//       ) : currentNav == "login" ? (
//         <Login />
//       ) : currentNav == "register" ? (
//         <Register />
//       ) : (
//         <></>
//       )}
//       <div className="fixed top-4 right-4 space-x-4">
//       <button  onClick={() => {
//           setCurrentNav("login");
//         }}  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//         Login
//       </button>
//       <button onClick={() => {
//           setCurrentNav("register");
//         }}  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
//         Register
//       </button>
//     </div>
//     </div>
//   );
// }

// export default App;

// const Home = () => <h2 className="text-center mt-10">Home Page</h2>;
// const Recipes = () => <h2 className="text-center mt-10">Recipes Page</h2>;
// const About = () => <h2 className="text-center mt-10">About Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="max-w-7xl mx-auto">
        <Navbar  />
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
          </Routes>
      
      </div>
    </Router>
  );
};

export default App;

