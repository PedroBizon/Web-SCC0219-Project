const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  id: {type: String, required: true},
  nome: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  telefone: {type: String, required: true},
  senha: {type: String, required: true},
  tipo: {type: String, enum: ['cliente', 'admin'], default: 'cliente'}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
