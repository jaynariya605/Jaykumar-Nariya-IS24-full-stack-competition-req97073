import { useNavigate  } from 'react-router-dom';
import ProductForm from '../Form/ProductForm'

const apiUrl = 'http://localhost:3000/api/v1/products';

const AddPage = () => {
    // Initialize error state
    let error = "";
    // Hook to navigate to other pages
    const navigate = useNavigate();

    // Function that handles form submission
    const onSubmithandle = async (newProduct) => {
        try {
            // Send POST request to API with new product data
            await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            // Navigate to home page after successful submission
            navigate("/");
        } catch (e) {
            // Set error message if request fails
            error = e.message;
        }
    }

    // Render component
    return (
        <div className='edit-product'>
            <h1>Add Product</h1>
            { error && <div className="form-group"> <p className='error-message'>{error}</p></div>}
            <ProductForm onSubmithandle={onSubmithandle}/>
        </div>
    )
}

export default AddPage