const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Ruta para obtener productos en stock
router.get('/products', async (req, res) => {
  try {
    const productsInStock = await Product.find({ inStock: true });
    res.json(productsInStock);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;  

