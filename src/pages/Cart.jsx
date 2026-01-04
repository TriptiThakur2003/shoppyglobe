import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";

/**
 * Cart Component
 * ----------------
 * This component displays all the products added to the cart.
 * It retrieves cart data from the Redux store and renders
 * individual CartItem components.
 *
 * Assignment Mapping:
 * - Redux state management
 * - Rendering list of cart items
 * - React Router navigation
 */
function Cart() {
  /**
   * useSelector is used to access Redux store state.
   * Here we are retrieving the cart items from cart slice.
   */
  const cartItems = useSelector((state) => state.cart.items);

  /**
   * Calculate total cart price.
   * Uses reduce() to sum price * quantity of each item.
   */
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /**
   * If cart is empty, show a user-friendly message
   * and a button to navigate back to Home page.
   */
  if (cartItems.length === 0)
    return (
      <Layout>
        <section className="container py-5 text-center">
          <p style={{ padding: "20px" }}>Your cart is empty.</p>

          {/* Link component is used for client-side routing */}
          <Link to="/">
            <button className="btn-gradient">Search more products</button>
          </Link>
        </section>
      </Layout>
    );

  /**
   * Render cart items when cart is not empty
   */
  return (
    <Layout>
      <div className="container py-5">
        <h2>Your Cart</h2>

        {/* Render list of cart items */}
        {cartItems.map((item) => (
          // Each CartItem receives item data via props
          // Unique key is provided as required by React lists
          <CartItem key={item.id} item={item} />
        ))}

        {/* Display total cart price */}
        <h3 className="text-success fs-4 my-4">
          Total: ₹{totalPrice.toFixed(2)}
        </h3>

        {/* Navigate to Checkout page */}
        <Link to="/checkout">
          <button className="btn-gradient flex-fill">Go to Checkout</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Cart;
