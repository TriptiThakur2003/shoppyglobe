import React from "react";
// import { useDispatch } from "react-redux";
// Redux action will be used later
// import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
//   const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Will dispatch addToCart action later
    // dispatch(addToCart(product));
    console.log("Add to Cart clicked for:", product.title);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
