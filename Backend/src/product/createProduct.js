const { products } = require('../db/db')
const {faker} = require('@faker-js/faker');


/**

Creates a new product and adds it to the list of products.
*
@param {object} req - The request object containing the product information in the body.
@param {object} res - The response object used to send a JSON response with the newly created product.
@returns {undefined}
*
@throws {object} If an error occurs during the creation of the product, an error message will be sent as a JSON object in the response.
*/


const createProduct = async (req, res) => {
    const {
        productName,
        productOwnerName,
        developers,
        scrumMasterName,
        startDate,
        methodology
    } = req.body;
    const newProduct = {
        productId: faker.datatype.uuid(),
        productName,
        productOwnerName,
        developers,
        scrumMasterName,
        startDate,
        methodology
    }
    try {
      products.push(newProduct);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


module.exports = createProduct