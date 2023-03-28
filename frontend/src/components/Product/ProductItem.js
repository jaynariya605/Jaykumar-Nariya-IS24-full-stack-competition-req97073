import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

// This is a memoized functional component that renders a single product item as a table row.
const ProductItem = ({ product }) => {
  // Get the navigate function from the react-router-dom library.
  const navigate = useNavigate();

  // When the Edit button is clicked, navigate to the edit page of the selected product using its ID.
  const onClickEdit = () => {
    navigate(`/edit/${product.productId}`, {
      state: {
        product,
      },
    });
  };

  // Render the HTML for the product item row.
  return (
    <tr key={product.productId}>
      <td>{product.productId}</td>
      <td>{product.productName}</td>
      <td>{product.productOwnerName}</td>
      <td>{product.developers.join(", ")}</td>
      <td>{product.scrumMasterName}</td>
      <td>{product.startDate}</td>
      <td>{product.methodology}</td>
      <td>
        {/* Render an Edit button that triggers the onClickEdit function. */}
        <button className="edit-button" onClick={onClickEdit}>
          <i className="fas fa-edit"></i>Edit
        </button>
      </td>
    </tr>
  );
};

// Export the memoized component so it only re-renders if its props have changed.
export default memo(ProductItem);

