import React, { useState } from "react";
import { useSelector, 
    // useDispatch
 } from "react-redux";
// import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // dispatch(clearCart()); // will clear cart
    setOrderPlaced(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (cartItems.length === 0) return <p style={{ padding: "20px" }}>Your cart is empty.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      <div style={{ marginBottom: "20px" }}>
        <h3>Cart Summary</h3>
        {cartItems.map((item) => (
          <p key={item.id}>{item.title} x {item.quantity} = ₹{item.price * item.quantity}</p>
        ))}
        <h4>Total: ₹{totalPrice}</h4>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h3>Enter Your Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px", width: "300px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px", width: "300px" }}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px", width: "300px" }}
        />
      </div>
      <button onClick={handlePlaceOrder} style={{ padding: "10px 20px" }}>Place Order</button>
      {orderPlaced && <p style={{ marginTop: "20px", color: "green" }}>Order placed successfully!</p>}
    </div>
  );
}

export default Checkout;
