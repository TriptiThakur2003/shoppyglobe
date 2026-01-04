import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Layout from '../components/Layout'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 
  
  if (cartItems.length === 0) return (
      <Layout>
        <section className="container py-5 text-center">
          <p  style={{ padding: "20px" }}>Your cart is empty.</p>
          <Link to="/">
            <button  className="btn-gradient ">Search more products</button>
          </Link>
        </section>
      </Layout>
    );

  return (
    <Layout>
      <div className="container py-5">
        <h2>Your Cart</h2>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <h3 className="text-success fs-4 my-4">
          Total: ₹{totalPrice.toFixed(2)}
        </h3> 
        <Link to="/checkout"> 
          <button className="btn-gradient flex-fill">Go to Checkout</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Cart;
