import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

function Navbar({admin=false, logado = false}) {
  if(admin === false && logado === true){ 
    return (
      <nav className='bg-[#2E86AB] justify-between text-white p-2 items-center flex w-screen fixed top-0'>
        <div className="text-white font-bold text-[20px]">
          <span role="img" aria-label="livro">📚</span> Bibliotech
        </div>
        <div>
          <Link to="/" className="px-8">Início</Link> 
          <Link to="/carrinho" className="px-8 text[20px]">Carrinho</Link>
          <Link to="/perfil" className="px-8">Perfil</Link>
        </div>
      </nav>
    );
  }
  if(admin === false && logado === false){ 
    return (
      <nav className='bg-[#2E86AB] justify-between text-white p-2 items-center flex w-screen fixed top-0'>
        <div className="text-white font-bold text-[20px]">
          <span role="img" aria-label="livro">📚</span> Bibliotech
        </div>
        <div>
          <Link to="/" className="px-8">Início</Link> 
          <Link to="/carrinho" className="px-8 text[20px]">Carrinho</Link>
          <Link to="/login" className="px-8">Login</Link>
        </div>
      </nav>
    );
  }
  if(admin === true && logado === true){ 
    return (
      <nav className='bg-[#2E86AB] justify-between text-white p-2 items-center flex w-screen fixed top-0'>
        <div className="text-white font-bold text-[20px]">
          <span role="img" aria-label="livro">📚</span> Bibliotech
        </div>
        <div>
          <Link to="/registrar-admin" className="px-8">Registrar Administradores</Link> 
          <Link to="/estoque-vendas" className="px-8 text[20px]">Estoque/Vendas</Link>
          <Link to="/administrar-clientes" className="px-8">Adminstrar Clientes</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
