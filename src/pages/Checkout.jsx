import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { clearCart } from "../redux/cartSlice";

/**
 * Checkout Component
 * -------------------
 * This component displays a checkout summary and a dummy
 * user details form. On placing the order:
 *  - A success message is shown
 *  - Cart is cleared using Redux
 *  - User is redirected to Home page automatically
 *
 * Assignment Mapping:
 * - Checkout page implementation
 * - Redux state usage and action dispatch
 * - Form handling and event management
 * - Programmatic navigation using React Router
 */
function Checkout() {
  // Dispatch is used to trigger Redux actions
  const dispatch = useDispatch();

  // Access cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  /**
   * Calculate total order price
   */
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // useNavigate allows programmatic navigation
  const navigate = useNavigate();

  /**
   * Local state to manage checkout form inputs
   */
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  /**
   * Local state to control order confirmation message
   */
  const [orderPlaced, setOrderPlaced] = useState(false);

  /**
   * Handle input changes for all form fields
   * Uses name attribute to update corresponding state
   */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handle order placement
   * - Validates form data
   * - Shows success message
   * - Clears cart after delay
   * - Redirects user to Home page
   */
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Safety check to ensure all fields are filled
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all details before placing order.");
      return;
    }

    // Show order placed message
    setOrderPlaced(true);

    // Simulate order processing delay
    setTimeout(() => {
      // Clear cart using Redux action
      dispatch(clearCart());

      // Redirect to Home page
      navigate("/");
    }, 3000);
  };

  /**
   * If cart is empty, redirect user to Home
   * with a friendly message
   */
  if (cartItems.length === 0)
    return (
      <Layout>
        <section className="container py-5 text-center">
          <p style={{ padding: "20px" }}>Your cart is empty.</p>

          <Link to="/">
            <button className="btn-gradient">Search more products</button>
          </Link>
        </section>
      </Layout>
    );

  /**
   * Checkout page UI
   */
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Order Summary Section */}
          <div className="col-md-5">
            <h2>Checkout</h2>

            {/* Render list of cart items */}
            {cartItems.map((item) => (
              <p key={item.id} className="text-primary">
                <b>
                  {item.title} x {item.quantity} =
                </b>{" "}
                <span className="text-info">
                  <b>₹{item.price * item.quantity}</b>
                </span>
              </p>
            ))}

            <h4 className="text-success">Total: ₹{totalPrice.toFixed(2)}</h4>
          </div>

          {/* User Details Form Section */}
          <div className="col-md-5">
            <div className="card card-body" style={{ maxWidth: "400px" }}>
              <h3 className="mb-3">Enter Your Details</h3>

              <form onSubmit={handlePlaceOrder} noValidate>
                {/* Name Field */}
                <label htmlFor="username" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="name"
                  autoComplete="name"
                  className="form-control mb-3"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                {/* Email Field */}
                <label htmlFor="useremail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="useremail"
                  autoComplete="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                {/* Address Field */}
                <label htmlFor="useraddress" className="form-label">
                  Address
                </label>
                <textarea
                  id="useraddress"
                  autoComplete="address"
                  name="address"
                  className="form-control mb-3"
                  placeholder="Enter your address"
                  rows="3"
                  value={form.address}
                  onChange={handleChange}
                  required
                />

                {/* Place Order Button */}
                <button type="submit" className="btn-gradient w-100">
                  Place Order
                </button>

                {/* Order Confirmation Message */}
                {orderPlaced && (
                  <p className="text-success mt-3 text-center">
                    ✅ Order placed successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
