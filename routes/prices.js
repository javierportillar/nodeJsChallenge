const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Product = require("../models/product");

router.get('/price/:userId/:productName', async (req, res) => {
  try {
    const { userId, productName } = req.params;
    const decodedProductName = decodeURIComponent(productName);

    const user = await User.findById(userId);
    const product = await Product.findOne({ name: decodedProductName });

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    let finalPrice = product.price; // Precio base del producto

    // Verificar si el usuario tiene un precio especial para el producto
    if (user && user.metadata && user.metadata.precios_especiales) {
      const specialPriceInfo = user.metadata.precios_especiales.find(p => p.nombre_producto === decodedProductName);
      if (specialPriceInfo) {
        finalPrice = specialPriceInfo.precio_especial_personal; // Precio especial si está disponible
      }
    }

    res.json({ price: finalPrice });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
