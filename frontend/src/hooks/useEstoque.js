import { useState, useEffect } from 'react';
import estoqueInicial from '../data/estoque.json';

export function useEstoque() {
  const [estoque, setEstoque] = useState(() => {
    const saved = localStorage.getItem('estoque');
    return saved ? JSON.parse(saved) : estoqueInicial;
  });

  useEffect(() => {
    localStorage.setItem('estoque', JSON.stringify(estoque));
  }, [estoque]);

  const adicionarProduto = (produto) => {
    setEstoque([...estoque, produto]);
  };

  const removerProduto = (id) => {
    setEstoque(estoque.filter(prod => prod.id !== id));
  };

  // Editar produto
  const editarProduto = (id, novosDados) => {
    setEstoque(estoque.map(prod => prod.id === id ? {...prod, ...novosDados} : prod));
  };

  return { estoque, adicionarProduto, removerProduto, editarProduto };
}
