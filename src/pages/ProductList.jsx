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
      <div className="container pb-5">
        <SearchBar />
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 my-2" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>    
    </Layout>
  );
}

export default ProductList;
