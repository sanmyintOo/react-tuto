import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/react-tuto" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
