import './CartItem.css';
import GerarBotao from '../Botao/Botao';

function CartItem({ book, onRemove }) {
  return (
    <div className="cart-item">
      <div className="book-image">
        <img src={book.imagem || '/imagens/default.jpg'} alt={book.nome} />
      </div>
      
      <div className="book-info">
        <span className="book-title">{book.nome}</span>
        <span className="book-author">{book.autor}</span>
      </div>

      <div className="book-actions">
        <span className="book-price">
          R$ {parseFloat(book.preco).toFixed(2).replace('.', ',')}
        </span>
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
