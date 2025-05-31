import Navbar from "../components/Navbar/Navbar";
import GerarBotao from "../components/Botao/Botao";
import Footer from "../components/Footer/Footer";

function CompraSucesso() {
  return (
    <>
      <Navbar logado={true} />

      <br /><br />

      <style>{`
        @media (max-width: 600px) {
          .sucesso-container {
            width: 90% !important;
            margin: 5% auto !important;
            padding: 15px !important;
          }
        }
      `}</style>

      <div
        className="sucesso-container"
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
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "#2E86AB",
            marginBottom: "10px",
          }}
        >
          ✅ Compra efetuada com sucesso!
        </h1>

        <br></br>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <GerarBotao
            cor={0}
            label="Início"
            className="px-32 py-4"
            to="/"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompraSucesso;
