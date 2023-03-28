const { products } = require('../db/db')


/**

Retrieves a product with the specified ID from the list of products and sends it in a JSON response.
*
@param {object} req - The request object containing the ID of the product to be retrieved in the URL parameter.
@param {object} res - The response object used to send a JSON response with the specified product or an error message if the product is not found.
@returns {undefined}
*
@throws {object} If an error occurs during the retrieval of the product, an error message will be sent as a JSON object in the response.
*/
const getProduct = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = products.find(p => p.productId === productId);
      
      if (!product) {
        res.status(404).json({ message: `Product with ID ${productId} not found` });
      } else {
        res.status(200).json(product);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

module.exports = getProduct