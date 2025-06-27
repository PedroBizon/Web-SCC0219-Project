import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar      from '../components/Navbar/Navbar';
import InputField  from '../components/InputField/InputField';
import GerarBotao  from '../components/Botao/Botao';

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const handleLogin = async () => {
  try {
    const resposta = await axios.post('http://localhost:3000/api/usuarios/login', {
      email,
      senha
    });

    const usuario = resposta.data.usuario;

    // marca como logado no app
    props.setLogado(true);
    props.setUsuarioLogado(usuario);

    // redireciona conforme tipo
    if (usuario.tipo === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.erro) {
      alert(err.response.data.erro); // exemplo: "Senha incorreta"
    } else {
      alert('Erro de conexão com o servidor.');
    }
  }
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

          <InputField 
            label="E-mail" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
          <InputField 
            label="Senha" 
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
            />

          <div className="text-center">
            <Link to="/esqueci-senha" className="text-[#2E86AB] font-medium hover:underline">
              Esqueci a senha
            </Link>
          </div>

          <div className="flex justify-center">
            <GerarBotao
              cor={0}
              label="Entrar"
              onClick={handleLogin}
              className="px-16 py-3"
            />           
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

export default Login;