import React from 'react';
import './ClientData.css';
import GerarBotao from '../Botao/Botao';

const ClientData = ({ id, titulo, quantidade, preco, onDelete }) => {
  return (
    <div className="client-data">
      <div className="data-col id">{id}</div>
      <div className="data-col titulo">{titulo}</div>
      <div className="data-col quantidade">{quantidade}</div>
      <div className="data-col preco">{preco}</div>
      <div className="data-col acao">
        <GerarBotao label="Editar" onClick={onDelete} cor={TextTrackCue} />
      </div>
    </div>
  )
}

export default ClientData;
