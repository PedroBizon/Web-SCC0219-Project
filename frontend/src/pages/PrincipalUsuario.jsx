// src/pages/PrincipalUsuario.jsx
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
import BookCard from "../components/BookCard/BookCard";
import axios from "axios";

const PrincipalUsuario = ({ carrinho, setCarrinho, logado }) => {
  const [livros, setLivros] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const resposta = await axios.get("http://localhost:3000/api/produtos");
        const livrosComPrecoFormatado = resposta.data.map((livro) => ({
          ...livro,
          preco: Number(livro.preco).toFixed(2) // só número, sem "R$"
        }));
        setLivros(livrosComPrecoFormatado);
        setFilteredBooks(livrosComPrecoFormatado);
      } catch (error) {
        console.error("Erro ao carregar produtos do backend:", error);
      }
    };

    carregarLivros();
  }, []);

  const handleSearch = (searchTerm) => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = livros.filter(livro => 
      livro.nome.toLowerCase().includes(lowerSearch) ||
      livro.autor.toLowerCase().includes(lowerSearch)
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <Navbar logado={logado}/>
      <SearchBar onSearch={handleSearch} />

      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',  
          gap: '50px',
          columnGap: '0%',                            
          maxWidth: '1000px',                     
          margin: '40px auto',
          padding: '10px'
        }}
      >
        {filteredBooks.map(livro => (
          <BookCard
            key={livro._id}
            livro={livro}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            max-width: 90% !important;
          }
          .grid-container > * {
            width: 100% !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
};

export default PrincipalUsuario;
