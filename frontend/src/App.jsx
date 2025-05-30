import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Imports de páginas
import PrincipalUsuaio from './pages/PrincipalUsuario';
import VisualizarProduto from './pages/VisualizarProduto';
import VendasEstoque from './pages/VendasEstoque';
import PrincipalAdmin from './pages/PrincipalAdmin';
import Login from './pages/Login';
import FinalizarCompra from './pages/FinalizarCompra';
import EditarProduto from './pages/EditarProduto';
import DadosPerfil from './pages/DadosPerfil';
import Carrinho from './pages/Carrinho';
import Cadastro from './pages/Cadastro';
import AdminRegistro from './pages/AdminRegistro';
import AdminCliente from './pages/AdminClientes';
import AdicionarProduto from './pages/AdicionarProduto';
// import Principal from './pages/Principal'

function App() {
  const [logado, setLogado] = useState(false);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/adicionar-produto" element={<AdicionarProduto />} />
          <Route path="/administrar-clientes" element={<AdminCliente />} />
          <Route path="/registrar-admin" element={<AdminRegistro />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/perfil" element={<DadosPerfil />} />
          <Route path="/editar" element={<EditarProduto />} />
          <Route path="/finalizar" element={<FinalizarCompra />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrincipalAdmin />} />
          <Route path="/" element={<PrincipalUsuaio />} />
          <Route path="/estoque-vendas" element={<VendasEstoque />} />
          <Route path="/visualizar" element={<VisualizarProduto />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
