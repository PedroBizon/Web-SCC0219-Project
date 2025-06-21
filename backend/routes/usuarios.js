const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Cadastro simples de usuário (POST /usuarios)
router.post('/', async (req, res) => {
  const { nome, email, senha, tipo } = req.body;

  try {
    // Verifica se o email já existe
    const existente = await Usuario.findOne({ email });
    if (existente) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    // Cria o usuário sem encriptar a senha
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha,
      tipo: tipo || 'cliente'
    });

    // Oculta a senha na resposta (opcional)
    const usuarioSemSenha = { ...novoUsuario.toObject(), senha: undefined };

    res.status(201).json(usuarioSemSenha);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
  }
});

module.exports = router;

// Login sem encriptação (POST /usuarios/login)
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ erro: 'Usuário não encontrado' });
    }

    // Comparação direta da senha (sem bcrypt)
    if (usuario.senha !== senha) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    // Resposta básica de login
    res.json({
      mensagem: 'Login bem-sucedido',
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo
      }
    });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao fazer login' });
  }
});

// Rota de cadastro de admin (sem autenticação)
router.post('/admin', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const existente = await Usuario.findOne({ email });
    if (existente) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    const novoAdmin = await Usuario.create({
      nome,
      email,
      senha,
      tipo: 'admin'
    });

    const adminSemSenha = { ...novoAdmin.toObject(), senha: undefined };

    res.status(201).json(adminSemSenha);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar admin' });
  }
});
