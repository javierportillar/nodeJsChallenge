const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  specialPrices: {
    type: Map,
    of: Number
  },
  metadata: {
    precios_especiales: [{
      nombre_producto: String,
      precio_especial_personal: Number
    }]
  }
});

module.exports = mongoose.model('User', userSchema);
