const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Models
const Usuario = require('./models/Usuario');
const Produto = require('./models/Produto');

// Rotas
const rotasProdutos = require('./routes/produtos');
const rotasUsuarios = require('./routes/usuarios');

// Inicialização do app
const app = express();
const PORT = 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Uso das rotas
app.use('/produtos', rotasProdutos);
app.use('/usuarios', rotasUsuarios);

// Conexão com MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/loja_virtual')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
