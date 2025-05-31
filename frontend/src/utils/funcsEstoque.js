const STORAGE_KEY = 'produtosLoja';

export function getProdutos() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function setProdutos(produtos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
}

export function addProduto(produto) {
  const produtos = getProdutos();
  produtos.push(produto);
  setProdutos(produtos);
}

export function updateProduto(id, produtoAtualizado) {
  let produtos = getProdutos();
  produtos = produtos.map(p => (p.id === id ? produtoAtualizado : p));
  setProdutos(produtos);
}

export function removeProduto(id) {
  let produtos = getProdutos();
  produtos = produtos.filter(p => p.id !== id);
  setProdutos(produtos);
}
