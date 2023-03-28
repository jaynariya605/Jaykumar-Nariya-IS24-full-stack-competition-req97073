const { products } = require('../db/db')


/**

Retrieves all products from the list of products and sends them in a JSON response.
*
@param {object} req - The request object containing no parameters.
@param {object} res - The response object used to send a JSON response with all products.
@returns {undefined}
*
@throws {object} If an error occurs during the retrieval of the products, an error message will be sent as a JSON object in the response.
*/
const getAll = async (req, res) => {
    try {
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

module.exports = getAll