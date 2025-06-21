const Usuario = require('./models/Usuario');
const Produto = require('./models/Produto');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rotasProdutos = require('./routes/produtos');
app.use('/produtos', rotasProdutos);
const rotasUsuarios = require('./routes/usuarios');
app.use('/usuarios', rotasUsuarios);


const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB local
mongoose.connect('mongodb://localhost:27017/meusite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error("Erro ao conectar no MongoDB:", err));

// Rota de teste
app.get('/', (req, res) => {
  res.send("Backend funcionando!");
});

app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});
