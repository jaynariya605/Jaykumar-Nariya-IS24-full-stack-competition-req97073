/**
 * Validates that all required fields are present in the request body.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
const validation = async (req, res) => {
    // Fields that are required to create a new product
    const requireFields = [
        'productName',
        'productOwnerName',
        'developers',
        'scrumMasterName',
        'startDate',
        'methodology'
    ];

    // Destructure the request body to get the values for each field
    const {
        productName,
        productOwnerName,
        developers,
        scrumMasterName,
        startDate,
        methodology
    } = req.body;

    // Create a new object with only the required fields
    const Product = {
        productName,
        productOwnerName,
        developers,
        scrumMasterName,
        startDate,
        methodology
    };

    // Check if any of the required fields are empty
    const emptyFields = requireFields.filter((field) => !Product[field]);
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: `${emptyFields.join(', ')} fields can't be empty` });
    }

};

module.exports = validation