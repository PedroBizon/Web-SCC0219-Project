import React from 'react';
import './RelatorioItem.css';

const RelatorioItem = ({ idpedido, cliente, data, livros, total }) => {
  return (
    <div className="item-data">
      <div className="data-col idpedido">{idpedido}</div>
      <div className="data-col cliente">{cliente}</div>
      <div className="data-col data">{data}</div>
      <div className="data-col livros">{livros}</div>
      <div className="data-col total">{total}</div>
    </div>
  )
}

export default RelatorioItem;
