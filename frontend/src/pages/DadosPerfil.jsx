import Navbar from "../components/Navbar/Navbar";
import GerarBotao from "../components/Botao/Botao";
import Footer from "../components/Footer/Footer";

function DadosPerfil() {
  return (
    <>
      <Navbar logado={true} />

        <br></br><br></br>

      <style>{`

        @media (max-width: 600px) {
          .perfil-container {
            width: 90% !important;
            margin: 5% auto !important;
            padding: 15px !important;
          }
          .perfil-row {
            margin-bottom: 6px;
          }
        }

      `}</style>

      <div
        className="perfil-container"
        style={{
          width: "30%",
          height: "auto",
          backgroundColor: "white",
          textAlign: "center",
          margin: "10% auto",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{textAlign: "center", fontWeight: "bold", fontSize: "25px", color: "#2E86AB",}}>Meu Perfil</h1>

        <br></br>

        {[
          { label: "Nome:", value: "Maria da Silva" },
          { label: "Email:", value: "maria@email.com" },
          { label: "Telefone:", value: "(11) 91234-5678" },
          { label: "Endereço:", value: "Rua das Flores, 123 - São Paulo" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="perfil-row"
            style={{borderBottom: "1px solid lightgray", paddingBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px"}}>

            <p style={{margin: 0, fontWeight: "bold", color: "gray",}}>{label}</p>
            <p style={{ margin: 0, color: "gray" }}>{value}</p>

          </div>
        ))}

        <br></br>
        <br></br>

        <GerarBotao cor={0} label="Editar Perfil" className="px-32 py-2" to="/editar-perfil"/>

        <br></br>
        <br></br>

      </div>

        <Footer />
      
    </>
  );
}

export default DadosPerfil;
