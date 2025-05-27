import React from 'react';
import './ClientData.css';
import GerarBotao from '../Botao/Botao';

const ClientData = ({ id, nome, telefone, email, onDelete }) => {
  return (
    <div className="client-data">
      <span>{id}</span>
      <span>{nome}</span>
      <span>{telefone}</span>
      <span>{email}</span>
      <GerarBotao onClick={onDelete} label="Deletar" />
    </div>
  );
};

export default ClientData;
