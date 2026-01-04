import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error fetching product: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "300px", height: "300px", objectFit: "cover" }} loading="lazy" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductDetail;
