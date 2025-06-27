const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  itens: [{
    produto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Produto',
      required: true,
    },
    quantidade: {
      type: Number,
      required: true,
      min: 1,
    }
  }],
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pedido', PedidoSchema); 
