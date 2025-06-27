import './CartItem.css';
import GerarBotao from '../Botao/Botao';

function CartItem({ book, onRemove, onQuantidadeChange }) {
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

        {/* Input para alterar quantidade */}
        <input
          type="number"
          min="1"
          value={book.quantidade || 1}
          onChange={(e) => onQuantidadeChange(book._id, parseInt(e.target.value) || 1)}
          style={{ width: '50px', marginLeft: '10px' }}
        />

        <GerarBotao
          cor={2}
          label="Remover"
          className="px-0 py-0"
          onClick={() => onRemove(book._id)}
        />
      </div>
    </div>
  );
}

export default CartItem;
