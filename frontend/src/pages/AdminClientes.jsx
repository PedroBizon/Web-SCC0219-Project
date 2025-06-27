import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ClientHeader from "../components/ClientHeader/ClienteHeader";
import GerarBotao from "../components/Botao/Botao";

function AdminCliente({ usuarios, setUsuarios }) {
  const navigate = useNavigate();

  // Buscar todos os usuários do backend
  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        const resposta = await axios.get("http://localhost:3000/api/usuarios");
        setUsuarios(resposta.data);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    };

    carregarUsuarios();
  }, [setUsuarios]);

  // Excluir usuário com base no _id do MongoDB
  const handleDelete = async (id, email) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
        setUsuarios((prevUsuarios) => prevUsuarios.filter((u) => u._id !== id));
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        alert("Erro ao excluir o usuário.");
      }
    }
  };

  return (
    <>
      <Navbar logado={true} admin={true} />

      <style>{`
        @media (max-width: 600px) {
          .container-admin {
            width: 95% !important;
            padding: 10px !important;
          }
          .cliente-row p {
            font-size: 12px !important;
          }
          .cliente-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>

      <br /><br /><br /><br />

      <div
        className="container-admin"
        style={{
          width: "80%",
          backgroundColor: "white",
          textAlign: "center",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#2E86AB",
          }}
        >
          Perfil Administrativo
        </h1>

        <br />

        <ClientHeader />

        {usuarios.map((user) => (
          <div
            key={user._id}
            className="cliente-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <p style={{ flex: 1, textAlign: "left", margin: 0 }}>id</p>
            <p style={{ flex: 2, textAlign: "left", margin: 0 }}>{user.nome}</p>
            <p style={{ flex: 2, textAlign: "left", margin: 0 }}>{user.telefone}</p>
            <p style={{ flex: 3, textAlign: "left", margin: 0 }}>{user.email}</p>

            <GerarBotao
              cor={2}
              label="Excluir"
              className="px-4 py-1"
              onClick={() => handleDelete(user._id, user.email)}
            />
          </div>
        ))}

        <br /><br />
      </div>
    </>
  );
}

export default AdminCliente;
