import { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate  } from 'react-router-dom';
import ProductForm from '../Form/ProductForm'

// Component that renders the form for editing a product
// Component for editing a product
const EditPage = () => {
    // Hooks to manage component state and navigation
    const { state } = useLocation();
    const [product, setProduct] = useState(); // Will hold the product data fetched from API
    const { id } = useParams(); // Get the product ID from the URL
    const [error, setError] = useState(""); // Holds error message if any
    const navigate = useNavigate();

    // Fetch the product data from API on component mount
    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        // If product is already in state (passed from previous page), set it, else fetch it by ID
        (!state || !state.product) ? fetchProductById() : setProduct(state.product);
    }, [id, state]);

    // Function that handles form submission
    const onSubmitHandle = async (updatedProduct) => {
        try {
            // Send PUT request to update the product data
            await fetch(`http://localhost:3000/api/v1/products/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedProduct),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            // Navigate to home page after successful submission
            navigate("/");
        } catch (error) {
            // Set error message if request fails
            setError(error.message);
        }
    };

    // Render component
    return (
        <div className='edit-product'>
            <h1>Edit Product</h1>
            {error && <div className="form-group"> <p className='error-message'>{error}</p></div>}
            {/* Render loader if product is not yet fetched, else render the ProductForm component */}
            {!product ? <div className="loader-div"><span className="loader"></span></div> : <ProductForm type={'edit'} product={product} onSubmithandle={onSubmitHandle} />}
        </div>
    );
};

export default EditPage