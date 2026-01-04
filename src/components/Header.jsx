import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Header component shown at the top of the application
// It contains the brand logo and cart button
function Header() {
  // Fetch cart items from Redux store
  // This allows us to show the cart count dynamically
  const cartItems = useSelector((state) => state.cart.items);

  return (
    // Main header wrapper (used for 3D / modern UI styling)
    <header className="header3d">
      <nav className="navbar3d">
        {/* Brand / Logo */}
        {/* Clicking this navigates the user back to the home page */}
        <Link to="/" className="brand3d">
          Shoppy<span>Globe</span>
        </Link>

        {/* Cart button wrapper */}
        {/* Navigates user to cart page */}
        <Link to="/cart" className="cartWrapper">
          <button className="cartBtn3d">
            {/* Cart icon (Bootstrap icon) */}
            <i className="bi bi-cart3"></i>

            {/* Cart badge */}
            {/* Shown only when there are items in the cart */}
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
