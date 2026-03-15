import { atom, useAtom } from 'jotai';

// Define the initial state of the cart. We put in one piece of test data
const initialCart = [

];

// Create an atom for the cart
export const cartAtom = atom(initialCart);

// Custom hook for cart operations
export const useCart = () => {

  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.product_id === product.id);
    if (existingItemIndex != -1) {
      const existingCartItem = cart[existingItemIndex];
      const modifiedCartItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
      const modifiedCart = cart.with(existingItemIndex, modifiedCartItem);
      setCart(modifiedCart)
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
      setCart(modifiedCart)
    }
  }

  const modifyQuantity = (item, newQuantity) => {
    const existingItemIndex = cart.findIndex(i => i.id === item);
    if (existingItemIndex != -1) {
      const existingCartItem = cart[existingItemIndex];
      const modifiedCartItem = { ...existingCartItem, quantity: newQuantity };
      const modifiedCart = cart.with(existingItemIndex, modifiedCartItem);
      setCart(modifiedCart)
    }
  }

  const removeFromCart = (item) => {
    const existingItemIndex = cart.findIndex(i => i.id === item);
    const modifiedCart = cart.toSpliced(existingItemIndex, 1);
    setCart(modifiedCart)
}

  // Function to calculate the total price of items in the cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return {
    cart,
    getCartTotal,
    addToCart,
    modifyQuantity,
    removeFromCart
  };
};