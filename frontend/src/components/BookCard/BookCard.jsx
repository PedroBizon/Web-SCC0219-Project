// src/components/BookCard/BookCard.jsx
import GerarBotao from '../Botao/Botao';
import './BookCard.css';
import { useNavigate } from 'react-router-dom';

function BookCard({ livro, carrinho, setCarrinho }) {
  const navigate = useNavigate();

  const handleAdd = () => {
    setCarrinho([...carrinho, livro]);
    alert("Produto adicionado ao carrinho"); 
  };

  return (
    <div className="book-card">
      <div className="book-image-placeholder">
        <img src={livro.foto} alt={livro.nome} />
      </div>
      <h3 className="book-title">{livro.nome}</h3>
      <p className="book-price">R$ {livro.preco}</p>
      <GerarBotao
        cor={0}
        label="Adicionar ao carrinho"
        onClick={handleAdd}
      />
    </div>
  );
}

export default BookCard;
