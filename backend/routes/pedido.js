const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto'); 
const Pedido = require('../models/Pedido');

router.post('/finalizar-compra', async (req, res) => {
  const { itens, usuarioId } = req.body;

  if (!itens || !Array.isArray(itens)) {
    return res.status(400).json({ error: 'Itens inválidos' });
  }

  try {
    // Verificar estoque
    for (const item of itens) {
      const produto = await Produto.findById(item.produtoId);
      if (!produto) return res.status(404).json({ error: `Produto não encontrado: ${item.produtoId}` });
      if (produto.estoque < item.quantidade) {
        return res.status(400).json({ error: `Estoque insuficiente para ${produto.nome}` });
      }
    }

    // Atualizar estoque
    for (const item of itens) {
      await Produto.findByIdAndUpdate(item.produtoId, { $inc: { estoque: -item.quantidade } });
    }

    // (Opcional) Salvar pedido
    const pedido = new Pedido({
      usuario: usuarioId,
      itens: itens.map(i => ({ produto: i.produtoId, quantidade: i.quantidade })),
      criadoEm: new Date(),
    });
    await pedido.save();

    return res.json({ message: 'Compra finalizada com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao finalizar compra' });
  }
});

module.exports = router;
