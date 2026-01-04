import React from "react";
import { Link } from "react-router-dom";

/**
 * NotFound Component
 * -------------------
 * This component is displayed when a user navigates
 * to an unknown or invalid route.
 *
 * Assignment Mapping:
 * - 404 Page implementation
 * - Proper error details shown on UI
 * - React Router navigation back to Home page
 */
function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
      }}
    >
      {/* Error Title */}
      <h1>404 - Page Not Found</h1>

      {/* Error Description */}
      <p>Sorry, the page you are looking for does not exist.</p>

      {/* Navigate user back to Home page */}
      <Link to="/">
        <button className="btn-gradient">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
