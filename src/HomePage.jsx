import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

import { useCart } from './CartStore';
import { useFlashMessage } from './FlashMessageStore'
import { useLocation } from "wouter";

function HomePage() {

  const [featuredProducts, setFeaturedProducts] = useState([]);

  const { addToCart } = useCart();
  const { showMessage } = useFlashMessage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const renderFeaturedProducts = () => {
    const productElements = [];
    for (const product of featuredProducts) {
      productElements.push(
        <div key={product.id} className="col-md-3 mb-4">
          <ProductCard
            id={product.id}
            imageUrl={product.imageUrl}
            productName={product.name}
            price={product.price.toFixed(2)}
            handleAddToCart={() => {
              addToCart(product);
              showMessage("New item added to cart!");
              setLocation('/cart');
            }}
          />
        </div>
      );
    }
    return productElements;
  };


  return (
    <>
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Kopi Space</h1>
          <p className="lead">good kopi stuff, no nonsense</p>
          <a href="/products" className="btn btn-light btn-lg">Look See Look See</a>
        </div>
      </header>

      <main className="container my-5">

        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {renderFeaturedProducts()}
        </div>

      </main>
    </>
  );
}

export default HomePage;