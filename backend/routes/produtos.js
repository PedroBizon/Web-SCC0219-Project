const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

// Criar um novo produto (POST /produtos)
router.post('/', async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body);
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// Listar todos os produtos (GET /produtos)
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Buscar produto por ID (GET /produtos/:id)
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Atualizar produto (PUT /produtos/:id)
router.put('/:id', async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!produtoAtualizado) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// Deletar produto (DELETE /produtos/:id)
router.delete('/:id', async (req, res) => {
  try {
    const removido = await Produto.findByIdAndDelete(req.params.id);
    if (!removido) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json({ mensagem: 'Produto removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
