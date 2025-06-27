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

const [usuarioLogado, setUsuarioLogado] = useState(() => {
  const armazenado = localStorage.getItem('usuarioLogado');
  return armazenado ? JSON.parse(armazenado) : null;
});

const [logado, setLogado] = useState(() => {
  return localStorage.getItem('usuarioLogado') !== null;
});
  const [carrinho, setCarrinho] = useState([]);

const [livros, setLivros] = useState([]);

const [usuarios, setUsuarios] = useState([]);

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
          element={<DadosPerfil usuario={usuarioLogado} setLogado={setLogado} setUsuarioLogado={setUsuarioLogado}/>}
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
        <Route path="/administrar-clientes" element={<AdminCliente usuarios={usuarios} setUsuarios={setUsuarios} />} />
        <Route path="/registrar-admin" element={<AdminRegistro />} />
        <Route path="/compra-sucesso" element={<CompraSucesso />} />
      </Routes>
    </Router>
  );
}

export default App;
