import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Custom Hook: useFetchProducts
 * --------------------------------
 * This hook is responsible for fetching the product list
 * from the external API and managing related states.
 *
 * Using a custom hook helps in:
 * - Code reusability
 * - Cleaner component structure
 * - Separation of concerns
 *
 * This satisfies the assignment requirement:
 * "Create a custom hook for fetching the product list"
 */
function useFetchProducts() {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  // State to track loading status while API call is in progress
  const [loading, setLoading] = useState(true);

  // State to store error message if API request fails
  const [error, setError] = useState(null);

  /**
   * useEffect runs when the component using this hook mounts
   * (empty dependency array ensures it runs only once).
   *
   * This fulfills:
   * "Use useEffect to fetch the list of products when the component mounts"
   */
  useEffect(() => {
    /**
     * Async function to fetch product data from API
     */
    const fetchProducts = async () => {
      try {
        // Set loading to true before starting API call
        setLoading(true);

        // API call to fetch products using axios
        const response = await axios.get("https://dummyjson.com/products");

        // Store the fetched products in state
        setProducts(response.data.products);
      } catch (err) {
        // Handle API errors gracefully
        setError(err.message);
      } finally {
        // Stop loading regardless of success or failure
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchProducts();
  }, []);

  /**
   * Return all required values so components
   * can consume them easily
   */
  return { products, loading, error };
}

export default useFetchProducts;
