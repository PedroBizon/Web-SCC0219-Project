import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar/Navbar';
import InputField from '../components/InputField/InputField';
import GerarBotao from '../components/Botao/Botao';

export default function AdminRegistro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (!nome || !id || !email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const novoAdmin = {
      id,
      nome,
      email,
      senha,
      telefone: "0000000000",
      tipo: "admin"
    };

    try {
      await axios.post('http://localhost:3000/api/usuarios', novoAdmin);
      alert("Administrador registrado com sucesso!");
      navigate('/administrar-clientes');
    } catch (error) {
      console.error('Erro ao cadastrar administrador:', error.response?.data || error.message);
      alert(error.response?.data?.erro || "Erro ao cadastrar administrador.");
    }
  };

  return (
    <>
      <Navbar logado={true} admin={true} />

      <div className="bg-gray-100 min-h-[100vh] pt-16 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 space-y-6">
          <h1 className="text-2xl font-bold text-[#2E86AB] text-center">
            Registre um administrador
          </h1>

          <InputField label="Nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
          <InputField label="ID-Admin" type="text" value={id} onChange={e => setId(e.target.value)} />
          <InputField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <InputField label="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
          <InputField label="Confirmar senha" type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} />

          <div className="flex justify-center">
            <GerarBotao
              cor={0}
              label="Cadastrar"
              onClick={handleCadastro}
              className="flex px-16 py-3 w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
