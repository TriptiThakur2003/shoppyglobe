import React, { useState } from "react";
import { useSelector, } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout'
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice"; 
import { Link } from "react-router-dom";

function Checkout() {
  const dispatch = useDispatch();   
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }; 
 
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // extra safety check
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all details before placing order.");
      return;
    } 
    // call checkout logic here
    setOrderPlaced(true);
    setTimeout(() => {  
      dispatch(clearCart()) 
      navigate("/");
    }, 3000);
  };


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
        <div className="row justify-content-center">
          <div className="col-md-5"> 
            <h2>Checkout</h2>
            {cartItems.map((item) => (
              <p key={item.id} className="text-primary"><b>{item.title} x {item.quantity} = </b><span className="text-info"><b>₹{item.price * item.quantity}</b></span></p>
            ))}
            <h4 className="text-success">  Total: ₹{totalPrice.toFixed(2)}</h4>
          </div> 
          <div className="col-md-5">
            <div className="card card-body" style={{ maxWidth: "400px" }}>
              <h3 className="mb-3">Enter Your Details</h3>

              <form onSubmit={handlePlaceOrder} noValidate>
                {/* Name */}
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

                {/* Email */}
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

                {/* Address */}
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

                <button type="submit" className="btn-gradient w-100">
                  Place Order
                </button>

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
