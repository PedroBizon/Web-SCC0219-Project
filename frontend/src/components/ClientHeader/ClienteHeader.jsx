import React from 'react';
import './ClientHeader.css';

const ClientHeader = () => {
  return (
    <div className="client-header">
      <span>ID</span>
      <span>Nome</span>
      <span>Telefone</span>
      <span>Email</span>
      <span></span> {/* espaço para o botão, alinhamento */}
    </div>
  );
};

export default ClientHeader;
