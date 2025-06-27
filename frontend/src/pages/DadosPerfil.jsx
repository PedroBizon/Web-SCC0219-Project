import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import GerarBotao from "../components/Botao/Botao";
import Footer from "../components/Footer/Footer";

function DadosPerfil({ usuario, setLogado, setUsuarioLogado }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    if (typeof setLogado === 'function') setLogado(false);
    if (typeof setUsuarioLogado === 'function') setUsuarioLogado(null);
    navigate('/login');
  };

  return (
    <>
      <Navbar logado={true} />

      <br /><br />

      <style>{`
        .perfil-container {
          width: min(90%, 400px);
          margin: 10% auto;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          text-align: center;
        }

        .perfil-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid lightgray;
          padding-bottom: 10px;
          margin-bottom: 20px;
          font-size: 16px;
        }

        @media (max-width: 900px) {
          .perfil-container {
            width: 70%;
            padding: 15px;
          }
          .perfil-row {
            font-size: 14px;
            margin-bottom: 15px;
          }
        }

        @media (max-width: 600px) {
          .perfil-container {
            width: 90% !important;
            margin: 5% auto !important;
            padding: 15px !important;
          }
          .perfil-row {
            font-size: 12px;
            margin-bottom: 10px;
            padding-bottom: 6px;
          }
        }
      `}</style>

      <div className="perfil-container">
        <h1 style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#2E86AB",
        }}>
          Meu Perfil
        </h1>

        <br />

        {[
          { label: "Nome:",  value: usuario?.nome || "Não informado"  },
          { label: "Email:", value: usuario?.email || "Não informado" },
          { label: "Telefone:", value: usuario?.telefone || "Não informado" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="perfil-row"
          >
            <p style={{ margin: 0, fontWeight: "bold", color: "gray" }}>{label}</p>
            <p style={{ margin: 0, color: "gray" }}>{value}</p>
          </div>
        ))}

        <br /><br />

        <GerarBotao cor={0} label="Editar Perfil" className="px-32 py-2" to="/editar-perfil" />

        <br /><br />

        <p
          onClick={handleLogout}
          className="text-blue-500 hover:underline cursor-pointer text-sm mt-4"
          style={{ textAlign: "center" }}
        >
          Logout
        </p>
        
      </div>

      <Footer />
    </>
  );
}

export default DadosPerfil;
