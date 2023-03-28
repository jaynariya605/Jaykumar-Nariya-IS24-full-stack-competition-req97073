import React from "react";
import ProductItem from "./ProductItem";

// This is a functional component that displays a table of products
const ProductTable = ({ products }) => {
  return (
    <table>
      {/* Define the table headers */}
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Owner Name</th>
          <th>Developers</th>
          <th>Scrum Master Name</th>
          <th>Start Date</th>
          <th>Methodology</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {/* If products are loaded, map through them and render ProductItem components for each one; otherwise, display a loading spinner */}
        {products ? (
          products.map((product) => (
            <ProductItem key={product.productId} product={product} />
          ))
        ) : (
          <div className="loader-div">
            <span className="loader"></span>
          </div>
        )}
      </tbody>
      {/* Display a footer row with the total number of products */}
      <tfoot>
        <tr>
          <td colSpan="8">Total Products: {products && products.length}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductTable;