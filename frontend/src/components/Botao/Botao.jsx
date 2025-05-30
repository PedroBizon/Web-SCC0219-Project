import React from 'react';
import './Botao.css'

function GerarBotao({ cor , label, onClick, className }) {
  const colors = ['bg-azul','bg-green-500','bg-[#ab2e2e]'];
  return (
    <button
      onClick={onClick}
      className={`${colors[cor]} text-white font-medium rounded-lg justify-center ${className} px-4`}
    >
      {label}
    </button>
  );
}
  

export default GerarBotao;
