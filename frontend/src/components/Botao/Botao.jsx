import React from 'react';
import './Botao.css'

const GerarBotao = ({ onClick, label = "Botão", cor}) => {
  if (cor) {
    return (
      <button
        onClick={onClick}
        className=" flex BotaoAzul rounded-md w-1/2 justify-center items-center"
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
