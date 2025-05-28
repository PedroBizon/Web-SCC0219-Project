import React from 'react';
import './EstoqueHeader.css';

const EstoqueHeader = () => {
  return (
    <div className="estoque-header">
      <div className="header-col id">ID</div>
      <div className="header-col titulo">Título</div>
      <div className="header-col quantidade">Quantidade</div>
      <div className="header-col preco">Preço</div>
      <div className="header-col acao"></div>
    </div>
  )
}

export default EstoqueHeader;
