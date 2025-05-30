import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar      from '../components/Navbar/Navbar';
import InputField  from '../components/InputField/InputField';
import GerarBotao  from '../components/Botao/Botao';

export default function Login({ setLogado }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // your real auth logic would go here…
    setLogado(true);
    navigate('/');           // redirect to home
  };

  return (
    <>
      <Navbar logado={true} admin={true}/>

      <div className="bg-gray-100 min-h-[100vh] pt-16 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 space-y-6">
          <h1 className="text-2xl font-bold text-[#2E86AB] text-center">
            Registre um administrador
          </h1>
        
          <InputField label="Nome" type="text" />
          <InputField label="ID-Admin" type="email" />
          <InputField label="Email" type="text" />
          <InputField label="Senha" type="password" />
          <InputField label="Confirmar senha" type="password" />

          <div className="flex justify-center">
            <GerarBotao
              cor={0}
              label="Cadastrar"
              onClick={handleLogin}
              className="flex px-16 py-3 w-full"
              to = "/estoque-vendas"
            />
          </div>
        </div>
      </div>
    </>
  );
}