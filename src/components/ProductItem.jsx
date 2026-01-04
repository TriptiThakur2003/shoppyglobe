import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Check if product already exists in cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card product-card h-100">
      <div className="card-img-wrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-100"
          loading="lazy"
        />
      </div>

      <div className="card-body text-center">
        <h6 className="fw-semibold">{product.title}</h6>
        <p className="mb-2">₹{product.price}</p>
      </div>

      <div className="card-footer bg-transparent border-0">
        <div className="d-flex gap-2">
          <button
            onClick={handleAddToCart}
            className="btn-gradient flex-fill"
          >
            {isInCart ? "Go to Cart" : "Add to Cart"}
          </button>

          <button
            onClick={handleDetails}
            className="btn btn-primary flex-fill"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
