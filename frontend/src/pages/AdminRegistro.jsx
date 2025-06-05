import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import InputField from '../components/InputField/InputField';
import GerarBotao from '../components/Botao/Botao';

export default function AdminRegistro({ usuarios, setUsuarios }) {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    if (!nome || !id || !email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const existe = usuarios.some(u => u.id === id || u.email === email);
    if (existe) {
      alert("Já existe um usuário com esse ID ou email.");
      return;
    }

    const novoUsuario = {
      id,
      nome,
      email,
      senha,
      telefone: '',
      admin: 'true'
    };

    setUsuarios([...usuarios, novoUsuario]);
    alert("Administrador registrado com sucesso!");
    navigate('/administrar-clientes'); // Redireciona para AdminClientes.jsx
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
