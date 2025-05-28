import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

function Navbar({ admin = false, logado = false }) {
  if (admin === false && logado === true) {
    return (
      <nav className='bg-[#2E86AB] justify-between text-white p-2 items-center flex w-screen fixed top-0'>
        <div className="text-white font-bold text-[20px]">
          <span role="img" aria-label="livro">📚</span> Bibliotech
        </div>
        <div className="flex gap-4">
          <Link to="/" className="px-4">Início</Link> 
          <Link to="/carrinho" className="px-4">Carrinho</Link>
          <Link to="/perfil" className="px-4">Perfil</Link>
        </div>
      </nav>
    );
  }

  if (admin === false && logado === false) {
    return (
      <nav className='bg-[#2E86AB] justify-between text-white p-2 items-center flex w-screen fixed top-0'>
        <div className="text-white font-bold text-[20px]">
          <span role="img" aria-label="livro">📚</span> Bibliotech
        </div>
        <div className="flex gap-4">
          <Link to="/" className="px-4">Início</Link> 
          <Link to="/carrinho" className="px-4">Carrinho</Link>
          <Link to="/login" className="px-4">Login</Link>
        </div>
      </nav>
    );
  }

  if (admin === true && logado === true) {
    return (
      <nav className='bg-[#2E86AB] justify-between text-white p-2 items-center flex w-screen fixed top-0'>
        <div className="text-white font-bold text-[20px]">
          <span role="img" aria-label="livro">📚</span> Bibliotech
        </div>
        <div className="flex gap-4">
          <Link to="/registrar-admin" className="px-4">Registrar Admin</Link> 
          <Link to="/estoque-vendas" className="px-4">Estoque/Vendas</Link>
          <Link to="/administrar-clientes" className="px-4">Administrar Clientes</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
