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
  console.log("📦 PUT recebido:", req.body); // ← LOG DE DEBUG

  try {
    const { nome, autor, preco, estoque, descricao, imagem } = req.body;

    // Validação: se imagem for nula ou string vazia, define valor default
    const imagemFinal = imagem && imagem.trim() !== "" ? imagem : "/imagens/default.jpg";

    const produtoAtualizado = await Produto.findByIdAndUpdate(
      req.params.id,
      {
        nome,
        autor,
        preco,
        estoque,
        descricao,
        imagem: imagemFinal
      },
      { new: true }
    );

    if (!produtoAtualizado)
      return res.status(404).json({ erro: 'Produto não encontrado' });

    res.json(produtoAtualizado);
  } catch (err) {
    console.error("Erro no PUT:", err.message); // ← LOG DE ERRO
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

// Diminuir estoque (PATCH /produtos/:id/diminuir)
router.patch('/:id/diminuir', async (req, res) => {
  const { quantidade } = req.body;

  if (quantidade == null || quantidade <= 0) {
    return res.status(400).json({ erro: 'Quantidade inválida. Deve ser maior que zero.' });
  }

  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    if (produto.estoque < quantidade) {
      return res.status(400).json({ erro: 'Estoque insuficiente.' });
    }

    produto.estoque -= quantidade;
    await produto.save();

    res.json({ mensagem: 'Estoque atualizado com sucesso.', produto });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});


module.exports = router;
