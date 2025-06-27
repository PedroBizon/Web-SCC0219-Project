import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar     from '../components/Navbar/Navbar';
import InputField from '../components/InputField/InputField';
import GerarBotao from '../components/Botao/Botao';

export default function Cadastro({ setLogado }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (campo, valor) => {
    setForm(prev => ({ ...prev, [campo]: valor }));
  };

  const handleSubmit = async () => {
    // Validação simples
    if (form.senha !== form.confirmarSenha) {
      setMensagem('As senhas não coincidem');
      return;
    }

    try {
      const resposta = await axios.post('http://localhost:3000/api/usuarios', {
        id: form.email, // Usando o email como id temporariamente
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        senha: form.senha,
        tipo: 'cliente'
      });

      if (resposta.status === 201) {
        setLogado(true);        // marca como logado (opcional)
        navigate('/');          // redireciona para home
      }
    } catch (err) {
      console.error('Erro detalhado:', err); // <-- LOGA NO CONSOLE

      if (err.response) {
        setMensagem(err.response.data.erro || 'Erro ao cadastrar.');
      } else if (err.request) {
        setMensagem('Servidor não respondeu.');
      } else {
        setMensagem('Erro desconhecido ao enviar requisição.');
      }
    }
  };

  return (
    <>
      <Navbar logado={false} />

      <div className="bg-gray-100 min-h-[100vh] pt-16 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 space-y-6">
          <h1 className="text-2xl font-bold text-[#2E86AB] text-center">
            Crie sua conta
          </h1>

          <p className="text-center text-gray-700">
            Preencha os campos abaixo para se cadastrar na loja.
          </p>

          <InputField label="Nome completo" type="text" value={form.nome} onChange={e => handleChange('nome', e.target.value)} />
          <InputField label="E-mail" type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} />
          <InputField label="Telefone" type="text" value={form.telefone} onChange={e => handleChange('telefone', e.target.value)} />
          <InputField label="Senha" type="password" value={form.senha} onChange={e => handleChange('senha', e.target.value)} />
          <InputField label="Confirmar senha" type="password" value={form.confirmarSenha} onChange={e => handleChange('confirmarSenha', e.target.value)} />

          {mensagem && (
            <p className="text-red-500 text-center text-sm">{mensagem}</p>
          )}

          <div className="flex justify-center">
            <GerarBotao
              cor={0}
              label="Cadastrar"
              onClick={handleSubmit}
              className="flex px-16 py-3 w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
