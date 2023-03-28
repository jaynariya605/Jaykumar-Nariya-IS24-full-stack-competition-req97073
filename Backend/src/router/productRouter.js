const express = require('express')
const getAll = require('../product/getAll')
const getProduct = require('../product/getProduct')
const createProduct = require('../product/createProduct')
const updateProduct = require('../product/updateProduct')
const deleteProduct = require('../product/deleteProduct')
const validation = require('../middleware/validation')

const router = new express.Router()

// GET all products
router.get('/api/v1/products', getAll);

// GET product by ID
router.get('/api/v1/products/:id', getProduct);

// CREATE product
router.post('/api/v1/products',validation, createProduct)

// UPDATE product
router.put('/api/v1/products/:id', updateProduct)

// DELETE product
router.delete('/api/v1/products/:id', deleteProduct)

module.exports = router