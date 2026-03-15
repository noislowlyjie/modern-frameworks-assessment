import React, { useState } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import RegisterPage from './RegisterPage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { Route, Switch } from 'wouter';
import './index.css';
import ProductCard from './ProductCard';
import FlashMessage from "./FlashMessage";

function App() {
  return (
    <>
      <Navbar />
      <FlashMessage />
      
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
