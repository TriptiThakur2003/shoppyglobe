import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (amount) => {
    if (amount >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: amount }));
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px", borderBottom: "1px solid #ccc", padding: "10px 0", alignItems: "center" }}>
      <img src={item.thumbnail} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
      <div style={{ flex: 1 }}>
        <h4>{item.title}</h4>
        <p>Price: ₹{item.price}</p>
        
        <div className="qty-wrapper">
          <button
            className="qty-btn"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            −
          </button>

          <span className="qty-value">{item.quantity}</span>

          <button
            className="qty-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>

      </div>
      <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
