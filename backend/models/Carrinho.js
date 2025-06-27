const mongoose = require('mongoose');

// Model of a Shop Cart
const ItemCarrinhoSchema = new mongoose.Schema({
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto', // reference to Produto model
    required: true
  },
  quantidade: {
    type: Number,
    default: 1,
    min: 1
  }
});

const CarrinhoSchema = new mongoose.Schema({
  itens: [ItemCarrinhoSchema],
  criadoEm: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Carrinho', CarrinhoSchema);
