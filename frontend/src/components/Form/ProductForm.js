import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// This is a functional component that renders a form for adding or editing a product.
// It takes in the following props:
// - product: an optional object containing data for an existing product, used for pre-filling the form fields when editing.
// - onSubmithandle: a function to handle form submission. It should take in an updatedProduct object as its parameter and perform the necessary actions (e.g. adding or updating the product).
// - type: an optional string value indicating the type of form being rendered ('edit' or 'add').

const ProductForm = ({ product, onSubmithandle, type }) => {
    // Declare state variables using the useState hook.
    const [formData, setFormData] = useState({
        productName: product ? product.productName : '',
        productOwnerName: product ? product.productOwnerName : '',
        developers: product ? product.developers.join(", ") : '',
        scrumMasterName: product ? product.scrumMasterName : '',
        startDate: product ? product.startDate : '',
        methodology: product ? product.methodology : 'Agile',
    });
    const [error, setError] = useState("");

    // Import the "useNavigate" hook from the React Router library.
    const navigate = useNavigate();

    // Define the handleChange function to update the state of the formData object when any form field is changed.
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Define the handleSubmit function to handle form submission.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const developers = formData.developers.split(", ");

        if (developers.length > 5) {
            setError("You can't add more than five developers");
            return;
        }

        const updatedProduct = {
            productName: formData.productName,
            productOwnerName: formData.productOwnerName,
            developers,
            scrumMasterName: formData.scrumMasterName,
            startDate: formData.startDate,
            methodology: formData.methodology,
        };

        // Check if any of the fields in updatedProduct are empty
        if (!updatedProduct.productName || !updatedProduct.productOwnerName || !updatedProduct.developers ||
            !updatedProduct.scrumMasterName || !updatedProduct.startDate || !updatedProduct.methodology) {
            setError('One or more fields are empty.');
            return;
        }

        await onSubmithandle(updatedProduct);
    };

    
    // Define the handleCancel function to navigate back to the home page when the "Cancel" button is clicked.
    const handleCancel = () => {
        return navigate("/");
    };

    // Render the form using JSX syntax.
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                    type="text"
                    name="productName"
                    id="productName"
                    value={formData.productName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="productOwnerName">Product Owner Name</label>
                <input
                    type="text"
                    name="productOwnerName"
                    id="productOwnerName"
                    value={formData.productOwnerName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="developers">Developers</label>
                <input
                    type="text"
                    name="developers"
                    id="developers"
                    value={formData.developers}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="scrumMasterName">Scrum Master Name</label>
                <input
                    type="text"
                    name="scrumMasterName"
                    id="scrumMasterName"
                    value={formData.scrumMasterName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="methodology">Methodology</label>
                <select id="methodology" name="methodology" value={formData.methodology} onChange={handleChange}>
                    <option value="Agile">Agile</option>
                    <option value="Waterfall">Waterfall</option>
                    <option value="Scrum">Scrum</option>
                    <option value="Kanban">Kanban</option>
                </select>
            </div>
            <div className="button-container">
                <button type="submit">{(type && type === 'edit') ? 'Save Changes' : 'Add Product'}</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>

            {/* Render an error message if the "developers" field has more than five values. */}
            
            { error && <div className="form-group"> <p className="error-message">{error}</p></div>}
      </form>
        
    )
}

export default ProductForm