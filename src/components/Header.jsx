import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc" }}>
      <nav>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div>
        🛒 {cartItems.length} items
      </div>
    </header>
  );
}

export default Header;
