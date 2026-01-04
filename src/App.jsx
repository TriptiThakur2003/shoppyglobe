import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/*
|--------------------------------------------------------------------------
| Lazy Loaded Pages
|--------------------------------------------------------------------------
| React.lazy() loads components only when they are needed.
| This improves performance by reducing initial bundle size.
|
| Example:
| - ProductList loads only when user visits "/"
| - ProductDetail loads only when user visits "/product/:id"
*/

const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    /*
    |--------------------------------------------------------------------------
    | BrowserRouter
    |--------------------------------------------------------------------------
    | Enables client-side routing using the HTML5 history API
    | Required for react-router-dom to work
    */
    <BrowserRouter>
      {/*
      |--------------------------------------------------------------------------
      | Suspense
      |--------------------------------------------------------------------------
      | Shows fallback UI while lazy-loaded components are being fetched
      | Prevents blank screen during loading
      */}
      <Suspense fallback={<p>Loading page...</p>}>
        {/*
        |--------------------------------------------------------------------------
        | Routes
        |--------------------------------------------------------------------------
        | Defines all application routes
        */}
        <Routes>
          {/* Home page → Product listing */}
          <Route path="/" element={<ProductList />} />

          {/* Product details page (dynamic route) */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Shopping cart page */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout page */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Fallback route → 404 Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
