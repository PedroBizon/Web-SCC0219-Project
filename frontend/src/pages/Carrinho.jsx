import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GerarBotao from '../components/Botao/Botao';

export default function Carrinho() {
  // dummy data — replace with your real cart items
  const itens = [
    { id: 1, titulo: 'Livro exemplo 1', autor: 'Autor exemplo 1', preco: '49,99' },
    { id: 2, titulo: 'Livro exemplo 2', autor: 'Autor exemplo 2', preco: '79,99' },
    { id: 3, titulo: 'Livro exemplo 3', autor: 'Autor exemplo 3', preco: '29,99' },
  ];

  const total = itens
    .reduce((sum, i) => sum + parseFloat(i.preco.replace(',', '.')), 0)
    .toFixed(2)
    .replace('.', ',');

  return (
    <>
      <Navbar logado={true} />

      <div className="bg-gray-100 min-h-[100vh] pt-16 flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-8 space-y-6 mt-6">
          
          <h1 className="text-2xl font-bold text-[#2E86AB]">
            Seu carrinho
          </h1>

          <div className="space-y-4">
            {itens.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-300 rounded" />
                  <div>
                    <p className="font-semibold">{item.titulo}</p>
                    <p className="text-sm text-gray-400">{item.autor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-semibold">R$ {item.preco}</span>
                  <button className="text-[#2E86AB] hover:underline text-sm">
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <hr />

          <div className="flex justify-end items-center space-x-6">
            <span className="font-semibold">Total: R$ {total}</span>
            <GerarBotao
              cor={0}
              label="Finalizar compra"
              className="px-6 py-2"
              onClick={() => alert('Implementar checkout')}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
