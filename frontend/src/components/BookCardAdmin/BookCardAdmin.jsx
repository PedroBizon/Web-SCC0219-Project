import GerarBotao from '../Botao/Botao';
import './BookCardAdmin.css';

function BookCard({ title }) {
  return (
    <div className="book-card">
      <div className="book-image-placeholder"></div>
      <h3 className="book-title">{title}</h3>
      <p className="book-price">Valor</p>
      <p>Estoque: 100</p>
    </div>
  );
}

export default BookCardAdmin;
