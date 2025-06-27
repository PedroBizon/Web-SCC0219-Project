import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import GerarBotao from "../components/Botao/Botao";
import Footer from "../components/Footer/Footer";
import InputField from "../components/InputField/InputField";

function PerfilEditar({ usuario, setUsuarioLogado }) {
  const [nome, setNome] = useState(usuario?.nome || "");
  const [email, setEmail] = useState(usuario?.email || "");
  const [telefone, setTelefone] = useState(usuario?.telefone || "");

  const handleSalvar = () => {
    const atualizado = {
      ...usuario,
      nome,
      email,
      telefone
    };

    setUsuarioLogado(atualizado);
    alert("Dados atualizados com sucesso!");
  };
  return (
    <>
      <Navbar logado={true} />

      <br /><br />

      <style>{`
        .perfil-container {
          width: 30%;
          height: auto;
          background-color: white;
          text-align: center;
          margin: 10% auto;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .perfil-row {
          margin-bottom: 20px;
          text-align: left;
        }

        .botoes {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        @media (max-width: 600px) {
          .perfil-container {
            width: 90% !important;
            margin: 5% auto !important;
            padding: 15px !important;
          }

          .perfil-row {
            margin-bottom: 6px !important;
          }

          .botoes {
            flex-direction: column-reverse !important;
            gap: 10px !important;
          }
        }
      `}</style>

      <div className="perfil-container">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#2E86AB",
          }}
        >
          Meu Perfil
        </h1>

        <br />

        <div className="perfil-row">
          <InputField
            label="Nome:"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            width="100%"
          />
        </div>

        <div className="perfil-row">
          <InputField
            label="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            width="100%"
          />
        </div>

        <div className="perfil-row">
          <InputField
            label="Telefone:"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu telefone"
            width="100%"
          />
        </div>

        <div className="botoes">
          <GerarBotao
            cor={0}
            label="Voltar"
            className="px-8 py-2"
            to="/perfil"
          />

          <GerarBotao
            cor={0}
            label="Editar Perfil"
            className="px-8 py-2"
            onClick={handleSalvar}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PerfilEditar;
