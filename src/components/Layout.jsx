import Header from "./Header";

// Layout component
// This acts as a common wrapper for all pages
// It ensures Header stays consistent across the app
function Layout({ children }) {
  return (
    // App-level wrapper
    // Used for global background and overall layout styling
    <div className="app-wrapper">
      {/* Common Header shown on every page */}
      <Header />

      {/* Page content wrapper */}
      {/* Centers the content and applies max width */}
      <div className="page-wrapper mx-auto maxWidthh">
        {/* Render page-specific content here */}
        {children}
      </div>
    </div>
  );
}

export default Layout;
