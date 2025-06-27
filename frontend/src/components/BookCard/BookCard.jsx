// src/components/BookCard/BookCard.jsx
import GerarBotao from '../Botao/Botao';
import './BookCard.css';
import { useNavigate } from 'react-router-dom';

function BookCard({ livro, carrinho, setCarrinho }) {
  const navigate = useNavigate();

  const handleAdd = () => {
    const index = carrinho.findIndex(item => item._id === livro._id);
    if (index !== -1) {
      // Produto já existe no carrinho, aumenta a quantidade
      const novoCarrinho = [...carrinho];
      if (novoCarrinho[index].quantidade) {
        novoCarrinho[index].quantidade += 1;
      } else {
        novoCarrinho[index].quantidade = 2; // já tinha 1, agora 2
      }
      setCarrinho(novoCarrinho);
    } else {
      // Produto não existe no carrinho, adiciona com quantidade 1
      setCarrinho([...carrinho, { ...livro, quantidade: 1 }]);
    }
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
