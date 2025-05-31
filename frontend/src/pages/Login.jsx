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
      <Navbar logado={false} />

      <div className="bg-gray-100 min-h-[100vh] pt-16 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 space-y-6">
          <h1 className="text-2xl font-bold text-[#2E86AB] text-center">
            Bem-vindo de volta!
          </h1>

          <p className="text-center text-gray-700">
            Preencha os campos abaixo para se cadastrar na loja.
          </p>

          <InputField label="E-mail" type="email" />
          <InputField label="Senha" type="password" />

          <div className="text-center">
            <Link to="/esqueci-senha" className="text-[#2E86AB] font-medium hover:underline">
              Esqueci a senha
            </Link>
          </div>

          <div className="flex justify-center">
            <Link to='/'>
            <GerarBotao
              cor={0}
              label="Entrar"
              onClick={handleLogin}
              className="px-16 py-3"
            />      
            </Link>      
          </div>

          <div className="text-center text-sm text-gray-600">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-[#2E86AB] font-medium hover:underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

