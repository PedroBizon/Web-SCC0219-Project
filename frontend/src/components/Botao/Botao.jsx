import React from 'react';
import './Botao.css'

const GerarBotao = ({ onClick, label = "Botão", cor}) => {
  if (cor) {
    return (
      <button
        onClick={onClick}
        className="BotaoAzul rounded-md"
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="BotaoVermelho"
      >
        {label}
      </button>
    );
  }
  
}
  

export default GerarBotao;
