import { useState } from 'react';
import './SearchBar.css';
import Botao from '../Botao/Botao'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Buscar livro por título, autor"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <Botao
        label="Buscar"
        cor={0}
      />
    </div>
  );
}

export default SearchBar;
