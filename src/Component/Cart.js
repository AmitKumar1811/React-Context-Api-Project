import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Cart = () => {
  const { cartItems, setCartItems, setCartItemNum, setFinalCart, CartItemNum } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const updatedTotalPrice = cartItems.reduce(
      (total, item) => total + item.Price,
      0
    );

    setTotalPrice(updatedTotalPrice);

    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.Quantity,
      0
    );
    setCartItemNum(totalQuantity);
  }, [cartItems, setCartItemNum]);

  const removeItem = (price) => {
    const updatedCartItems = cartItems.filter((item) => item.Price !== price);
    setCartItems(updatedCartItems);
  };

  const handleAdditem = (item) => {
    const updatedCart = cartItems.map((olditem) =>
      olditem.id === item.id
        ? {
            ...olditem,
            Price: olditem.Price + item.ActualPrice,
            Quantity: olditem.Quantity + 1,
          }
        : olditem
    );
    setCartItems(updatedCart);
  };

  const handleDecitem = (item) => {
    const updatedCart = cartItems.map((olditem) =>
      olditem.id === item.id && olditem.Quantity > 1
        ? {
            ...olditem,
            Price: olditem.Price - item.ActualPrice,
            Quantity: olditem.Quantity - 1,
          }
        : olditem
    );
    setCartItems(updatedCart);
  };

  const CheckoutHandler = () => {
    if (localStorage.getItem("token") === null) {
      toast.error("Login Required!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/Login");
    } else {
      if (cartItems.length === 0) {
        toast.info("Please Add Some Item Into Your Cart!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      } else {
        const Finaldata = { price: totalPrice, item: cartItems.length };
        setFinalCart(Finaldata);
        navigate("/Name_details");
      }
    }
  };

  return (
    <div className="Cart">
      <h1>Cart</h1>
      {cartItems?.map((item, index) => (
        <div key={item.title} className="CartItem">
          <img src={item.Image} alt="No Images" />
          <div className="CartItemContent">
            <h4>Product Name: {item.title}</h4>
            <p>Price: ${item.ActualPrice}</p>
            <button onClick={() => removeItem(item.Price)}>Remove</button>
            <br />
            <span>
              <button onClick={() => handleAdditem(item)}> + </button>
              <span>{item.Quantity}</span>
              <button onClick={() => handleDecitem(item)}> - </button>
            </span>
          </div>
        </div>
      ))}

      {localStorage.getItem("token") === null ? (
        <button onClick={() => navigate("/Login")}>Login Now !</button>
      ) : (
        <div className="TotalSection">
          <h3>Total Price: ${totalPrice}</h3>
          <h3>Total Items: {CartItemNum}</h3>

          <button onClick={CheckoutHandler}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
