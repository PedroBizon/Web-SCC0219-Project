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

  const handleImageClick = () => {
    navigate("/visualizar", { state: { livro } });
  };

  return (
    <div className="book-card">
      <div
        className="book-image-placeholder"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      >
        <img src={livro.imagem || "/imagens/default.jpg"} alt={livro.nome} />
      </div>
      <h3 className="book-title">{livro.nome}</h3>
      <p className="book-price">R$ {livro.preco}</p>
      <GerarBotao cor={0} label="Adicionar ao carrinho" onClick={handleAdd} />
    </div>
  );
}

export default BookCard;
