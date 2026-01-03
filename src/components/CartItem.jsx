import React from "react";
// import { useDispatch } from "react-redux";
// Redux actions will be used later
// import { removeFromCart, updateQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
//   const dispatch = useDispatch();

  const handleRemove = () => {
    // Will dispatch removeFromCart action later
    // dispatch(removeFromCart(item.id));
    console.log("Remove item:", item.title);
  };

  const handleQuantityChange = (amount) => {
    // Will dispatch updateQuantity action later
    // dispatch(updateQuantity({ id: item.id, quantity: amount }));
    console.log("Change quantity for:", item.title, "to", amount);
  };

  return (
    <div style={{ display: "flex", gap: "20px", borderBottom: "1px solid #ccc", padding: "10px 0", alignItems: "center" }}>
      <img src={item.thumbnail} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
      <div style={{ flex: 1 }}>
        <h4>{item.title}</h4>
        <p>Price: ₹{item.price}</p>
        <div>
          <button onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
          <span style={{ margin: "0 10px" }}>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
        </div>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
