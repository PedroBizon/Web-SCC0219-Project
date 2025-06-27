const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Cadastro simples de usuário (POST /usuarios)
router.post('/', async (req, res) => {
  const { id, nome, email, senha, telefone, tipo } = req.body;

  try {
    const existente = await Usuario.findOne({ email });
    if (existente) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    const novoUsuario = await Usuario.create({
      id,
      nome,
      email,
      senha,
      telefone,
      tipo: tipo || 'cliente'
    });

    const usuarioSemSenha = { ...novoUsuario.toObject(), senha: undefined };
    res.status(201).json(usuarioSemSenha);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
  }
});

// Login (POST /usuarios/login)
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ erro: 'Usuário não encontrado' });
    }

    if (usuario.senha !== senha) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    res.json({
      mensagem: 'Login bem-sucedido',
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        telefone: usuario.telefone,
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
      idadmin,
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

// Listar todos usuários (GET /usuarios)
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Editar usuário pelo ID (PUT /usuarios/:id)
router.put('/:id', async (req, res) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!usuarioAtualizado) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Apagar usuário pelo ID (DELETE /usuarios/:id)
router.delete('/:id', async (req, res) => {
  try {
    const usuarioRemovido = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioRemovido) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.json({ mensagem: 'Usuário removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
