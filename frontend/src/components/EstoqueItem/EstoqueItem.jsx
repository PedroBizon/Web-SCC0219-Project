import React from 'react';
import './EstoqueItem.css';
import GerarBotao from '../Botao/Botao';
import { useNavigate } from 'react-router-dom';

const EstoqueItem = ({ id, titulo, quantidade, preco, autor, descricao, onDelete }) => {
  const navigate = useNavigate();

const handleEditar = () => {
  const produto = { id, titulo, quantidade, preco, autor, descricao };
  navigate('/editar', { state: { produto } });
};

  return (
    <div className="estoque-item">
      <div className="data-col id">{id}</div>
      <div className="data-col titulo">{titulo}</div>
      <div className="data-col quantidade">{quantidade}</div>
      <div className="data-col preco">{preco}</div>
      <div className="data-col acao">
        <GerarBotao
          cor={0}
          label="Editar"
          className="px-0 py-0"
          onClick={handleEditar}
        />
        
        <GerarBotao
          cor={2}
          label="Apagar"
          className="px-0 py-0"
          onClick={onDelete}
        />
      </div>
    </div>
  )
}

export default EstoqueItem;
