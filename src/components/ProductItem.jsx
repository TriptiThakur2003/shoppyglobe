import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  // Redux dispatch to trigger cart actions
  const dispatch = useDispatch();

  // React Router navigation hook
  const navigate = useNavigate();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Check if the current product already exists in the cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  // Handle Add to Cart button click
  // If item already exists, redirect user to Cart page
  // Otherwise, add the product to cart
  const handleAddToCart = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  // Navigate to product details page using product id
  const handleDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    // Product card container
    <div className="card product-card h-100">
      {/* Product image section */}
      <div className="card-img-wrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-100"
          loading="lazy" // Improves performance by lazy loading images
        />
      </div>

      {/* Product title and price */}
      <div className="card-body text-center">
        <h6 className="fw-semibold">{product.title}</h6>
        <p className="mb-2">₹{product.price}</p>
      </div>

      {/* Action buttons */}
      <div className="card-footer bg-transparent border-0">
        <div className="d-flex gap-2">
          {/* Add to Cart / Go to Cart button */}
          <button onClick={handleAddToCart} className="btn-gradient flex-fill">
            {isInCart ? "Go to Cart" : "Add to Cart"}
          </button>

          {/* Navigate to product details */}
          <button onClick={handleDetails} className="btn btn-primary flex-fill">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
