const express = require('express');
const { getData } = require('./db/db')
const productRouter = require('./router/productRouter')
const cors = require('cors');
const path = require('path');

const staticfilepath= path.join(__dirname, 'public')

getData()
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(staticfilepath));
app.use(productRouter)
app.get('/health', (req, res) => {
    res.status(200).send('API is running smoothly.');
});

module.exports = app