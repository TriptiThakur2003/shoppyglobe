import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

// CartItem component represents a single product inside the cart
// It receives `item` as a prop which contains product details and quantity
function CartItem({ item }) {
  // useDispatch is used to send actions to Redux store
  const dispatch = useDispatch();

  // This function removes the current item from the cart
  // It dispatches the removeFromCart action with product id
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  // This function updates the quantity of the cart item
  // It ensures quantity never goes below 1
  const handleQuantityChange = (amount) => {
    if (amount >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: amount }));
    }
  };

  return (
    // Main wrapper for cart item layout
    <div
      style={{
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #ccc",
        padding: "10px 0",
        alignItems: "center",
      }}
    >
      {/* Product image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />

      {/* Product details section */}
      <div style={{ flex: 1 }}>
        <h4>{item.title}</h4>
        <p>Price: ₹{item.price}</p>

        {/* Quantity controller */}
        <div className="qty-wrapper">
          {/* Decrease quantity button */}
          <button
            className="qty-btn"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1} // Prevent quantity from going below 1
          >
            −
          </button>

          {/* Current quantity display */}
          <span className="qty-value">{item.quantity}</span>

          {/* Increase quantity button */}
          <button
            className="qty-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Remove item from cart button */}
      <button className="btn btn-danger" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
