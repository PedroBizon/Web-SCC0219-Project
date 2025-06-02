// src/pages/PrincipalUsuario.jsx
import { useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
import BookCard from "../components/BookCard/BookCard";

const PrincipalUsuario = ({ livros, carrinho, setCarrinho }) => {
  const [filteredBooks, setFilteredBooks] = useState(livros);

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
      <Navbar />
      <SearchBar onSearch={handleSearch} />

      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '50px',
          maxWidth: '1000px',
          margin: '40px auto',
          padding: '10px'
        }}
      >
        {filteredBooks.map(livro => (
          <BookCard
            key={livro.id}
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
