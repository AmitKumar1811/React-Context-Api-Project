import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [CartItemNum, setCartItemNum] = useState(0);
  const [searchdata, setSearchdata] = useState("");
  const [username, setUsername] = useState("Sign-In");
  const [finalCart, setFinalCart] = useState([]);
  const [billaddress, setBilladdress] = useState([]);
  const [searchcart, setSearchcart] = useState("");
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(2);
  const [third, setThird] = useState(3);
  const [productnum, setProductnum] = useState(0);
  const addToCart = (newItem) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newItem.id
    );
    if (existingItemIndex !== -1) {
      toast.info("This Item already in Cart !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setCartItems([...cartItems, { ...newItem, Quantity: 1 }]);
      setCartItemNum(CartItemNum + 1);
    }
  };

  return (
    <CartContext.Provider
      value={{
        searchcart,
        setSearchcart,
        username,
        setUsername,
        searchdata,
        setSearchdata,
        setCartItemNum,
        CartItemNum,
        setCartItems,
        cartItems,
        addToCart,
        finalCart,
        setFinalCart,
        setBilladdress,
        billaddress,
        second,
        setSecond,
        third,
        setThird,
        first,
        setFirst,
        productnum,
        setProductnum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
