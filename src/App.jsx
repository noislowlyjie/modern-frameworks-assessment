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
import ShoppingCart from './ShoppingCart';
import UserLogin from "./UserLogin";
import Profile from "./Profile";

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
        <Route path="/cart" component={ShoppingCart}/>
        <Route path="/login" component={UserLogin}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
      <footer className="bg-dark text-white text-center py-1">
        <div className="container">
          <p>&copy; 2026 Kopi Space. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
