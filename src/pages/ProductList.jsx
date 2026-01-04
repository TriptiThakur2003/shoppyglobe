import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import SearchBar from "../components/SearchBar";
import Layout from '../components/Layout'

function ProductList() {
  const { products, loading, error } = useFetchProducts();

  const searchTerm = useSelector((state) => state.search.searchTerm);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <SearchBar />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>    
    </Layout>
  );
}

export default ProductList;
