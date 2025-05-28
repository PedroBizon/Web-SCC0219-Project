import React from 'react';
import './RelatorioItem.css';
import GerarBotao from '../Botao/Botao';

const RelatorioItem = ({ idpedido, cliente, data, livros, total }) => {
  return (
    <div className="client-data">
      <div className="data-col idpedido">{idpedido}</div>
      <div className="data-col cliente">{cliente}</div>
      <div className="data-col data">{data}</div>
      <div className="data-col livros">{livros}</div>
      <div className="data-col total">{total}</div>
    </div>
  )
}

export default RelatorioItem;
