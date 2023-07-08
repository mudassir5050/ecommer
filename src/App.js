import { BrowserRouter, Route, Routes } from "react-router-dom";
// import React,{useState} from 'react';
import "./App.css";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Singleproduct from "./Singleproduct";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import Header from "./components/Header"
import Footer from "./components/Footer";


function App() {


  

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element={<Errorpage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
