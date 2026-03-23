import React, { useEffect } from 'react';
import { useCart } from './CartStore';
import { useJwt } from "./UserStore";
import axios from 'axios';

const ShoppingCart = () => {
  const { cart, fetchCart, getCartTotal, modifyQuantity, removeFromCart, isLoading } = useCart();


  const { getJwt } = useJwt();

    useEffect(() => {
        fetchCart();
    }, []);

    const handleCheckout = async () => {
        const jwt = getJwt();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/checkout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            // Redirect to Stripe Checkout
            window.location.href = response.data.url;
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("Checkout failed. Please try again.");
        } finally {

        }
    };

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {isLoading ? (
        <p>Loading cart...</p>
      ) : cart.length === 0 ? (
        <p>Your cart is empty. WHY??</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <img src={item.imageUrl} alt={item.name} className="cart-image" />
                  <h5>{item.name}</h5>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-secondary me-2" onClick={() => modifyQuantity(item.id, item.quantity - 1)} disabled={isLoading} >-</button>
                    <p className="mb-0">Quantity: {item.quantity}</p>
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => modifyQuantity(item.id, item.quantity + 1)} disabled={isLoading} >+</button>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(item)} disabled={isLoading} >Remove</button>
                  </div>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 mb-3 text-end">
            <h4>Total: ${getCartTotal()}</h4>
            <button
              className="btn btn-primary mt-2"
              onClick={handleCheckout}
              disabled={isLoading || cart.length === 0}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;