import React, { useState, useEffect } from "react";
import FilterBar from "../Filter/FilterBar";
import ProductTable from "./ProductTable";

// This is a functional component that displays a list of products in a table and allows them to be filtered.
const ProductListPage = () => {
  // Define two state variables: 'products' to store all products, and 'filteredProducts' to store filtered products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Use the useEffect hook to fetch products from the server when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products from the server using the 'fetch' API and set both the products and filteredProducts state variables
        const response = await fetch("http://localhost:3000/api/v1/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Define a function to filter products based on a search term entered by the user
  const filterProducts = (searchTerm) => {
    if (!searchTerm) {
      // If the search term is blank, display all products
      return setFilteredProducts(products);
    }
    // Otherwise, set the filteredProducts state variable to only show products that contain the search term in either their scrumMasterName or developers fields
    setFilteredProducts(
      products.filter((product) => {
        const { scrumMasterName, developers } = product;
        return (
          scrumMasterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          developers.some((developer) =>
            developer.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      })
    );
  };

  // Render the HTML for the product list page, including a FilterBar and ProductTable component
  return (
    <div className="table-container">
      <FilterBar onFilter={filterProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductListPage;