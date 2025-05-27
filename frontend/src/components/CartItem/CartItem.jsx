import './CartItem.css';

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
        <button className="remove-button" onClick={() => onRemove(book.id)}>Remover</button>
      </div>
    </div>
  );
}

export default CartItem;
