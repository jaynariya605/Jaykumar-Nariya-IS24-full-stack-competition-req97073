const { products } = require('../db/db')

/**

Updates a product with the specified ID in the list of products and sends the updated product in a JSON response.
*
@param {object} req - The request object containing the ID of the product to be updated in the URL parameter and the new product information in the body.
@param {object} res - The response object used to send a JSON response with the updated product or an error message if the product is not found.
@returns {undefined}
*
@throws {object} If an error occurs during the update of the product, an error message will be sent as a JSON object in the response.
*/
const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const {
        productName,
        productOwnerName,
        developers,
        scrumMasterName,
        startDate,
        methodology
    } = req.body;
    try {
       const updatedProduct =  {
        productName,
        productOwnerName,
        developers,
        scrumMasterName,
        startDate,
        methodology
    }
      const index = products.findIndex(p => p.productId === productId);
      
      if (index === -1) {
        res.status(404).json({ message: `Product with ID ${productId} not found` });
      } else {
        products[index] = { ...products[index], ...updatedProduct };
        res.status(200).json(products[index]);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


module.exports = updateProduct