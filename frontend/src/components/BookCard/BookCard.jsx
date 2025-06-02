import GerarBotao from '../Botao/Botao';
import './BookCard.css';

function BookCard(props) {
  return (
    <div className="book-card">
      <div className="book-image-placeholder">
        <img src={props.foto}></img>
      </div>
      <h3 className="book-title">{props.nome}</h3>
      <p className="book-price">{props.preco}</p>
      <GerarBotao cor={0} label="Adicionar ao carrinho" onClick={() => props.setCarrinho([...Carrinho, livro])}/>
    </div>
  );
}

export default BookCard;
