const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Rotas
const usuariosRoutes = require('./routes/usuarios');
const produtosRoutes = require('./routes/produtos');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
const mongoURI = "mongodb+srv://usuario:12345@projetoweb.pyoc1tq.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoWeb";

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Atlas conectado com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

// Usa as rotas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/produtos', produtosRoutes);

// Rota simples para teste se servidor está rodando
app.get('/', (req, res) => {
  res.send('API rodando! Acesse /api/usuarios ou /api/produtos para testar.');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
