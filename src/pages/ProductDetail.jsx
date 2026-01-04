import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

/**
 * ProductDetail Component
 * ------------------------
 * Displays detailed information about a selected product.
 * The product ID is received dynamically from the route
 * using useParams().
 *
 * Assignment Mapping:
 * - Dynamic routing using route parameters
 * - Data fetching using useEffect
 * - Error handling for failed API calls
 * - Redux integration for cart management
 */
function ProductDetail() {
  /**
   * Extract product ID from URL parameters
   * Example route: /product/5
   */
  const { id } = useParams();

  // Local state to store product details
  const [product, setProduct] = useState(null);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  // State to store error message if API call fails
  const [error, setError] = useState(null);

  // Redux dispatch for triggering cart actions
  const dispatch = useDispatch();

  // useNavigate for programmatic navigation
  const navigate = useNavigate();

  /**
   * Fetch selected product details when component mounts
   * or when product ID changes.
   *
   * This fulfills:
   * "Use useEffect to fetch details of a selected product
   * based on route parameters"
   */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        // API call to fetch product details
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );

        // Store product data in state
        setProduct(response.data);
      } catch (err) {
        // Handle API errors gracefully
        setError(err.message);
      } finally {
        // Stop loading after API call completes
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /**
   * Access cart items from Redux store
   */
  const cartItems = useSelector((state) => state.cart.items);

  /**
   * Check if the current product already exists in the cart.
   * This is used to conditionally change button behavior.
   */
  const isInCart = product
    ? cartItems.some((item) => item.id === product.id)
    : false;

  /**
   * Handle Add to Cart button click
   * - If product already exists in cart, redirect to cart
   * - Otherwise, add product to cart using Redux action
   */
  const handleAddToCart = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  /**
   * Show loading spinner while product data is being fetched
   */
  if (loading) {
    return (
      <Layout>
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading product details...</p>
        </div>
      </Layout>
    );
  }

  // Display error message if API call fails
  if (error) return <p>Error fetching product: {error}</p>;

  // Fallback UI if product is not found
  if (!product) return <p>No product found.</p>;

  /**
   * Product Detail UI
   */
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
              loading="lazy" // Lazy loading for performance optimization
            />
          </div>

          {/* Product Information */}
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>

            <h4 className="text-success">Price: ₹{product.price}</h4>

            {/* Add to Cart / Go to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-gradient flex-fill"
            >
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
