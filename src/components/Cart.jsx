import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <p style={{ padding: "20px" }}>Your cart is empty.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h3>Total: ₹{totalPrice}</h3>
      <Link to="/checkout">
        <button style={{ marginTop: "10px", padding: "10px 20px" }}>Go to Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
