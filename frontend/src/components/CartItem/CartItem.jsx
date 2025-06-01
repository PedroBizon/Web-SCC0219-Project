import './CartItem.css';
import GerarBotao from '../Botao/Botao';

function CartItem({ book, onRemove }) {
  return (
    <div className="cart-item">
      <div className="book-image"></div>
      
      <div className="book-info">
        <span className="book-title">{book.title}</span>
        <span className="book-author">{book.author}</span>
      </div>

      <div className="book-actions">
        <span className="book-price">R$ {book.price.toFixed(2)}</span>
        <GerarBotao
        cor={2}
        label="Remover"
        className="px-0 py-0"
        onClick={() => onRemove(book.id)}
        />
      </div>
    </div>
  );
}

export default CartItem;
