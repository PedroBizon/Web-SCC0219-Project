// src/pages/Carrinho.jsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GerarBotao from '../components/Botao/Botao';
import CartItem from '../components/CartItem/CartItem';

const Carrinho = ({ carrinho, setCarrinho }) => {
  const handleRemove = (id) => {
    const novoCarrinho = carrinho.filter(item => item.id !== id);
    setCarrinho(novoCarrinho);
  };

  const total = carrinho
    .reduce((sum, item) => sum + parseFloat(item.preco), 0)
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
            {carrinho.length === 0 ? (
              <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              carrinho.map(item => (
                <CartItem
                  key={item.id}
                  book={item}
                  onRemove={handleRemove}
                />
              ))
            )}
          </div>

          {carrinho.length > 0 && (
            <div className="flex flex-col items-center space-y-4 mt-6">
              <span className="font-semibold">Total: R$ {total}</span>
              <GerarBotao
                cor={0}
                label="Finalizar compra"
                className="px-32 py-2"
                to="/finalizar"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrinho;
