import React from 'react';
import './EstoqueItem.css';
import GerarBotao from '../Botao/Botao';

const EstoqueItem = ({ id, titulo, quantidade, preco, onDelete }) => {
  return (
    <div className="estoque-item">
      <div className="data-col id">{id}</div>
      <div className="data-col titulo">{titulo}</div>
      <div className="data-col quantidade">{quantidade}</div>
      <div className="data-col preco">{preco}</div>
      <div className="data-col acao">
        <GerarBotao label="Editar" onClick={onDelete} cor={true} />
      </div>
    </div>
  )
}

export default EstoqueItem;
