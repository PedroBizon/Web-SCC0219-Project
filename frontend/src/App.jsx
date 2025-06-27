import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imports de páginas
import PrincipalUsuario from './pages/PrincipalUsuario';
import VisualizarProduto from './pages/VisualizarProduto';
import VendasEstoque from './pages/VendasEstoque';
import Login from './pages/Login';
import FinalizarCompra from './pages/FinalizarCompra';
import EditarProduto from './pages/EditarProduto';
import DadosPerfil from './pages/DadosPerfil';
import Carrinho from './pages/Carrinho';
import Cadastro from './pages/Cadastro';
import AdminRegistro from './pages/AdminRegistro';
import AdminCliente from './pages/AdminClientes';
import AdicionarProduto from './pages/AdicionarProduto';
import PerfilEditar from './pages/PerfilEditar';
import CompraSucesso from './pages/CompraSucesso';

function App() {
  const [logado, setLogado] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [carrinho, setCarrinho] = useState([]);

  // Agora "livros" é um estado dinâmico em vez de um array fixo
  const [livros, setLivros] = useState([
    {
      id: "001",
      nome: "Dom Casmurro",
      autor: "Machado de Assis",
      preco: "30.00",
      estoque: 10,
      descricao: "Traiu, ou não?",
      foto: "/imagens/dom_casmurro.jpg"
    },
    {
      id: "002",
      nome: "O Alienista",
      autor: "Machado de Assis",
      preco: "35.69",
      estoque: 50,
      descricao: "Louco, só quem não é louco",
      foto: "/imagens/alienista.jpg"
    },
    {
      id: "003",
      nome: "Quincas Borba",
      autor: "Machado de Assis",
      preco: "27.90",
      estoque: 100,
      descricao: "Ao vencedor, as batatas!",
      foto: "/imagens/quincas_borba.jpg"
    },
    {
      id: "004",
      nome: "As crônicas de Nárnia",
      autor: "C. S. Lewis",
      preco: "130.00",
      estoque: 3,
      descricao: "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal.",
      foto: "/imagens/cronicas_narnia.jpg"
    },
    {
      id: "005",
      nome: "Campo Geral",
      autor: "João Guimarães Rosa",
      preco: "49.00",
      estoque: 33,
      descricao: "O Mutum é lindo!",
      foto: "/imagens/campo_geral.jpg"
    },
    {
      id: "006",
      nome: "Ensaio sobre a cegueira",
      autor: "José Saramago",
      preco: "54.04",
      estoque: 45,
      descricao: "Estou cego!",
      foto: "/imagens/ensaio_sobre_cegueira.jpg"
    },
    {
      id: "007",
      nome: "Sagarana",
      autor: "João Guimarães Rosa",
      preco: "49.99",
      estoque: 14,
      descricao: "O burrinho Pedrês",
      foto: "/imagens/sagarana.jpg"
    },
    {
      id: "008",
      nome: "Algoritmos - Teoria e Prática",
      autor: "Thomas H. Cormen",
      preco: "579.00",
      estoque: 16,
      descricao:
        "Este livro apresenta um texto abrangente sobre o moderno estudo de algoritmos para computadores...",
      foto: "/imagens/introduction_to_algorithms.jpg"
    }
  ]);

  let usuarios = [
    {
      id: "001",
      nome: "admin",
      senha: "admin",
      telefone: "12345",
      email: "admin@email.com",
      admin: "true"
    },
    {
      id: "002",
      nome: "Pedro",
      endereco: "Rua 2, Bairro 3",
      telefone: "123456",
      senha: "Pedro",
      email: "pedro@email.com",
      admin: "false"
    },
    {
      id: "003",
      nome: "Arthur",
      endereco: "Rua 3, Bairro 2",
      telefone: "1234567",
      senha: "Arthur",
      email: "arthur@email.com",
      admin: "false"
    }
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrincipalUsuario
              livros={livros}
              logado={logado}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setLogado={setLogado}
              setUsuarioLogado={setUsuarioLogado}
            />
          }
        />
        <Route
          path="/carrinho"
          element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} logado={logado}/>}
        />
        <Route
          path="/perfil"
          element={<DadosPerfil usuario={usuarioLogado} logado={logado} />}
        />
        <Route
          path="/editar-perfil"
          element={
            <PerfilEditar
              usuario={usuarioLogado}
              setUsuarioLogado={setUsuarioLogado}
            />
          }
        />
        {/* ------------------- ROTAS ADMINISTRATIVAS ------------------- */}
        <Route
          path="/admin"
          element={
            <VendasEstoque
              livros={livros}
              setLivros={setLivros}
            />
          }
        />
        <Route
          path="/adicionar-produto"
          element={
            <AdicionarProduto livros={livros} setLivros={setLivros} />
          }
        />
        <Route
          path="/editar"
          element={
            <EditarProduto livros={livros} setLivros={setLivros} />
          }
        />
        {/* -------------------- OUTRAS ROTAS -------------------- */}
        <Route path="/visualizar" element={<VisualizarProduto carrinho={carrinho} setCarrinho={setCarrinho} logado={logado}/>} />
        <Route path="/finalizar" element={<FinalizarCompra />} />
        <Route path="/cadastro" element={<Cadastro setLogado={setLogado}/>} />
        <Route path="/administrar-clientes" element={<AdminCliente usuarios={usuarios}/>} />
        <Route path="/registrar-admin" element={<AdminRegistro />} />
        <Route path="/compra-sucesso" element={<CompraSucesso />} />
      </Routes>
    </Router>
  );
}

export default App;
