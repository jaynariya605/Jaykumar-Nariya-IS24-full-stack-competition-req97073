const { products } = require('../db/db')

/**

Deletes a product with the specified ID from the list of products.
*
@param {object} req - The request object containing the ID of the product to be deleted in the URL parameter.
@param {object} res - The response object used to send a status code and/or an error message if an error occurs during the deletion process.
@returns {undefined}
*
@throws {object} If an error occurs during the deletion of the product, an error message will be sent as a JSON object in the response.
*/
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
      const index = products.findIndex(p => p.productId === productId);
      if (index === -1) {
        res.status(404).json({ message: `Product with ID ${productId} not found` });
      } else {
        products.splice(index, 1);
        res.status(204).send(); // 204 No Content status code for successful deletion
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

module.exports = deleteProduct