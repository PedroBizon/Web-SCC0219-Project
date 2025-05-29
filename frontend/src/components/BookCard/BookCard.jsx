import GerarBotao from '../Botao/Botao';
import './BookCard.css';

function BookCard({ title }) {
  return (
    <div className="book-card">
      <div className="book-image-placeholder"></div>
      <h3 className="book-title">{title}</h3>
      <p className="book-price">Valor</p>
      <GerarBotao cor={0} label="Adicionar ao carrinho" />
    </div>
  );
}

export default BookCard;
