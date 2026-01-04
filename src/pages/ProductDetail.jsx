import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from '../components/Layout'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const cartItems = useSelector((state) => state.cart.items);

  // Check if product already exists in cart
  // const isInCart = cartItems.some((item) => item.id === product.id);
  const isInCart = product
    ? cartItems.some((item) => item.id === product.id)
    : false;

  const handleAddToCart = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };

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

  if (error) return <p>Error fetching product: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.thumbnail} alt={product.title} style={{ width: "300px", height: "300px", objectFit: "cover" }} loading="lazy" />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4 className="text-success">Price: ₹{product.price}</h4> 
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
