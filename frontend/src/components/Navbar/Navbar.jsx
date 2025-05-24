import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="livro">📚</span> Bibliotech
      </div>
      <div className="navbar-links">
        <span>Início</span> 
        <span>Carrinho</span>
        <span>Perfil</span>
      </div>
    </nav>
  );
}

export default Navbar;
