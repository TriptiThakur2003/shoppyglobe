import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

/**
 * ProductList Component
 * ----------------------
 * Displays a list of products fetched from an external API.
 * Includes a search feature powered by Redux state.
 *
 * Assignment Mapping:
 * - useEffect data fetching (via custom hook)
 * - Redux-based search filtering
 * - Rendering product list using map()
 * - Props usage and component reusability
 */
function ProductList() {
  /**
   * Fetch product data using custom hook.
   * The hook internally uses useEffect for API calls.
   */
  const { products, loading, error } = useFetchProducts();

  /**
   * Access search term from Redux store.
   * This enables global search state management.
   */
  const searchTerm = useSelector((state) => state.search.searchTerm);

  /**
   * Filter products based on search term.
   * Filtering is case-insensitive for better UX.
   *
   * This satisfies:
   * "Implement a search feature to filter products
   * using Redux state"
   */
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Show loading and error states
   */
  if (loading) return <p>Loading products...</p>;

  if (error) return <p>Error fetching products: {error}</p>;

  /**
   * Render product list UI
   */
  return (
    <Layout>
      <div className="container pb-5">
        {/* Search input component */}
        <SearchBar />

        <div className="row">
          {/* Render list of filtered products */}
          {filteredProducts.map((product) => (
            <div
              className="col-md-3 my-2"
              key={product.id} // Unique key for React list
            >
              {/* Pass product data via props */}
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ProductList;
