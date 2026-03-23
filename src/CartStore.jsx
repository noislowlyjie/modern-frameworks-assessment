import { atom, useAtom } from 'jotai';
import axios from 'axios';
import { useEffect, useRef } from "react";
import { useJwt } from "./UserStore";

const getProductId = (item) => item?.product_id ?? item?.productId ?? item?.id ?? item?.product?.id;

const toApiCartItem = (item) => {
  const productId = getProductId(item);
  const quantity = Number(item?.quantity ?? 0);

  if (!productId || quantity <= 0) {
    return null;
  }

  return {
    product_id: productId,
    quantity,
  };
};

// Define the initial state of the cart. We put in one piece of test data
const initialCart = [

];

// Create an atom for the cart
export const cartAtom = atom(initialCart);
export const cartLoadingAtom = atom(false);

// Custom hook for cart operations
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);
    const [isLoading, setIsLoading] = useAtom(cartLoadingAtom);
    const { getJwt } = useJwt();

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.product_id === product.id);
    if (existingItemIndex != -1) {
      const existingCartItem = cart[existingItemIndex];
      const modifiedCartItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      const modifiedCart = cart.with(existingItemIndex, modifiedCartItem);
      setCart(modifiedCart);
      updateCart(modifiedCart);
    } else {
      const newCartItem = {
        id: Math.floor(Math.random() * 10000 + 1),
        product_id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        description: product.description,
        quantity: 1

      }
      const modifiedCart = [...cart, newCartItem];
      setCart(modifiedCart);
      updateCart(modifiedCart);
    }
  }

  const modifyQuantity = (item, newQuantity) => {
    const existingItemIndex = cart.findIndex(i => i.id === item);
    if (existingItemIndex != -1) {
      const existingCartItem = cart[existingItemIndex];
      const modifiedCartItem = { ...existingCartItem, quantity: newQuantity };
      const modifiedCart = cart.with(existingItemIndex, modifiedCartItem);
      setCart(modifiedCart)
      updateCart(modifiedCart);
    }
  }

   // updatedCart contains the latest cart items
    const updateCart = async (updatedCart) => {
        const jwt = getJwt();
      if (!jwt) {
        return;
      }

        setIsLoading(true);
        try {
        const updatedCartItems = updatedCart
          .map(toApiCartItem)
          .filter(Boolean);

            await axios.put(import.meta.env.VITE_API_URL + '/api/cart', {
                cartItems: updatedCartItems
            }, {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            })

      } catch (error) {
        console.error("Error updating cart:", error);
        } finally {
            setIsLoading(false);
        }
    }

  const removeFromCart = (item) => {
    const itemId = typeof item === 'object' ? item.id : item;
    const existingItemIndex = cart.findIndex(i => i.id === itemId);
    if (existingItemIndex === -1) {
      return;
    }
    const modifiedCart = cart.toSpliced(existingItemIndex, 1);
    setCart(modifiedCart)
    updateCart(modifiedCart);
}
  const fetchCart = async () => {
        const jwt = getJwt();
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/cart`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        } finally {
            setIsLoading(false);
        }
    };



  // Function to calculate the total price of items in the cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return {
    cart,
    isLoading,
    getCartTotal,
    addToCart,
    modifyQuantity,
    removeFromCart,
    fetchCart
  };
};