import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GerarBotao from '../components/Botao/Botao';
import CartItem from '../components/CartItem/CartItem';

export default function Carrinho() {
  
  const itens = [
    { id: 1, title: 'Livro exemplo 1', author: 'Autor exemplo 1', price: 49.99 },
    { id: 2, title: 'Livro exemplo 2', author: 'Autor exemplo 2', price: 79.99 },
    { id: 3, title: 'Livro exemplo 3', author: 'Autor exemplo 3', price: 29.99 },
  ];

  function handleRemove(id) {
    console.log("Remover item com id:", id);
  }

  const total = itens
    .reduce((sum, i) => sum + i.price, 0)
    .toFixed(2)
    .replace('.', ',');

  return (
    <>
      <Navbar logado={true} />

      <div className="bg-gray-100 min-h-[100vh] pt-16 flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-8 space-y-6 mt-6">
          
          <h1 className="text-3xl font-bold text-[#2E86AB] text-center">
            Seu carrinho
          </h1>

          <div className="space-y-4">
            
            {itens.map(item => (
              <CartItem 
                key={item.id} 
                book={item} 
                onRemove={handleRemove}
              />
            ))}
          </div>

          <br></br>

<div className="flex flex-col items-center space-y-4 mt-6">
  <span className="font-semibold">Total: R$ {total}</span>
  <GerarBotao
    cor={0}
    label="Finalizar compra"
    className="px-32 py-2"
    to="/finalizar"
  />
</div>
        </div>
      </div>

      <Footer />
    </>
  );
}