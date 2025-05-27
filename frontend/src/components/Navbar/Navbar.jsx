import React from 'react';
//import { Link } from 'react-router-dom';
//import './Navbar.css';

function Navbar() {
  return (
    <nav className='bg-[#2E86AB] justify-between text-white p-2 items-center flex w-screen fixed top-0'>
      <div className="text-white font-bold text-[20px]">
        <span role="img" aria-label="livro">📚</span> Bibliotech
      </div>
      <div>
        <span className='px-8 text-[20px]'>Início</span> 
        <span className='px-8 text-[20px]'>Carrinho</span>
        <span className='px-8 text-[20px]'>Perfil</span>
      </div>
    </nav>
  );
}

export default Navbar;
