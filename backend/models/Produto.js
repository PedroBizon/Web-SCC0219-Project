const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  autor: {type: String, required: true},
  preco: {type: Number, required: true},
  estoque: {type: Number, default: 0},
  descricao: {type: String}
});

module.exports = mongoose.model('Produto', ProdutoSchema);
