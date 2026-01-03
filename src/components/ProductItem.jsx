import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} loading="lazy" />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
