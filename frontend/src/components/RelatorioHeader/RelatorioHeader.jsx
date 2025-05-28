import React from 'react';
import './RelatorioHeader.css';

const RelatorioHeader = () => {
  return (
    <div className="relatorio-header">
      <div className="header-col idpedido">ID Pedido</div>
      <div className="header-col cliente">Cliente</div>
      <div className="header-col data">Data</div>
      <div className="header-col livros">Livros</div>
      <div className="header-col total">Total</div>
    </div>
  )
}

export default RelatorioHeader;
