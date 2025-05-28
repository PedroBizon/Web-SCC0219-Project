import React from 'react';
import './ClientData.css';
import GerarBotao from '../Botao/Botao';

const ClientData = ({ id, nome, telefone, email, onDelete }) => {
  return (
    <div className="client-data">
      <div className="data-col id">{id}</div>
      <div className="data-col nome">{nome}</div>
      <div className="data-col telefone">{telefone}</div>
      <div className="data-col email">{email}</div>
      <div className="data-col acao">
              <GerarBotao
              cor={2}
              label="Deletar"
              className="px-2 py-0"
            />
      </div>
    </div>
  )
}

export default ClientData;
