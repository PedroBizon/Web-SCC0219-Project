import React from 'react';
import { Link } from 'react-router-dom';
import './Botao.css';

function GerarBotao({ cor, label, onClick, className, to }) {
  const colors = ['bg-azul', 'bg-green-500', 'bg-[#ab2e2e]'];

  if (to) {
    return (
      <Link
        to={to}
        className={`${colors[cor]} text-white font-medium rounded-lg justify-center ${className} px-4 py-2 inline-block text-center`}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${colors[cor]} text-white font-medium rounded-lg justify-center ${className} px-4 py-2`}
    >
      {label}
    </button>
  );
}

export default GerarBotao;
