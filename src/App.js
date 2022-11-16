import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/UI/NavigationBar";
import Hero from "./components/UI/Hero";
import Footer from "./components/UI/Footer";
import LandingPage from "./components/LandingPage/index";
import SearchCar from "./components/SearchCar/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<SearchCar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
