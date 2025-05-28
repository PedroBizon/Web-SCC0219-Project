import React from 'react';
import './ClientHeader.css';

const ClientHeader = () => {
  return (
    <div className="client-header">
      <div className="header-col id">ID</div>
      <div className="header-col nome">Nome</div>
      <div className="header-col telefone">Telefone</div>
      <div className="header-col email">Email</div>
      <div className="header-col acao"></div>
    </div>
  )
}

export default ClientHeader;
