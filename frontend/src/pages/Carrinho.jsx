import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GerarBotao from '../components/Botao/Botao';
import CartItem from '../components/CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const Carrinho = ({ carrinho, setCarrinho, logado }) => {
  const navigate = useNavigate();

  const handleRemove = (id) => {
    const index = carrinho.findIndex(item => item._id === id);
    if (index !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho.splice(index, 1);
      setCarrinho(novoCarrinho);
    }
  };

  // Função para alterar quantidade
  const handleQuantidadeChange = (id, novaQtd) => {
    if (novaQtd < 1) return; // não permite quantidade menor que 1
    const novoCarrinho = carrinho.map(item => 
      item._id === id ? { ...item, quantidade: novaQtd } : item
    );
    setCarrinho(novoCarrinho);
  };

  const handleFinalizarCompra = () => {
    if (logado) {
      navigate("/finalizar", { state: { carrinho } });
    } else {
      navigate("/login");
    }
  };

  const total = carrinho
    .reduce((sum, item) => sum + parseFloat(item.preco) * (item.quantidade || 1), 0)
    .toFixed(2)
    .replace('.', ',');

  return (
    <>
      <Navbar logado={logado} />
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
                  key={item._id}
                  book={item}
                  onRemove={handleRemove}
                  onQuantidadeChange={handleQuantidadeChange}
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
                onClick={handleFinalizarCompra}
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
