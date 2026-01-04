import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header3d">
      <nav className="navbar3d">
        {/* Brand */}
        <Link to="/" className="brand3d">
          Shoppy<span>Globe</span>
        </Link>

        {/* Cart Button */}
        <Link to="/cart" className="cartWrapper">
          <button className="cartBtn3d">
            <i className="bi bi-cart3"></i>

            {cartItems.length > 0 && (
              <span className="cartBadge">{cartItems.length}</span>
            )}
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
