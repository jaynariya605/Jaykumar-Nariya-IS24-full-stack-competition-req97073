import React from "react";


// This is a functional component that renders the header of the website.
const Header = () => {
  // Render the HTML for the header using JSX syntax.
  return (
    <header className="header">
      <div className="header__logo">
        <h3>Products</h3>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {/* Render a link to the home page. */}
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">
              Home
            </a>
          </li>
          {/* Render a link to the products page. */}
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">
              Products
            </a>
          </li>
          {/* Render a link to the API documentation page. */}
          <li className="header__nav-item">
            <a href="/api/api-doc" className="header__nav-link">
              Api Doc
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;