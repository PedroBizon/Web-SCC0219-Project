import React from 'react';
import './Botao.css'

function GerarBotao({ cor , label, onClick, className }) {
  const colors = ['bg-azul','bg-green-500','bg-red-500'];
  return (
    <button
      onClick={onClick}
      className={`${colors[cor]} text-white font-medium rounded-lg justify-center ${className}`}
    >
      {label}
    </button>
  );
}
  

export default GerarBotao;
