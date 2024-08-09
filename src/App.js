import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Carousel from "./components/Carousel";
import Rating from "./components/Rating";
import Contact from "./pages/Contact";
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <div className=" mx-auto overflow-hidden">
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
