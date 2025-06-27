import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";

function FinalizarCompra({ setCarrinho, usuario }) {
  const location = useLocation();
  const navigate = useNavigate();
  const carrinho = location.state?.carrinho || [];

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const subtotal = carrinho.reduce(
    (sum, item) => sum + parseFloat(item.preco) * (item.quantidade || 1),
    0
  );
  const frete = 10.0;
  const total = subtotal + frete;

  const handleFinalizar = async () => {
    setErro("");
    setLoading(true);
    try {
      // Formatar os itens para enviar ao backend
      const itensParaEnviar = carrinho.map((item) => ({
        produtoId: item._id,
        quantidade: item.quantidade || 1,
      }));

      // Envia a compra para o backend (substitua URL conforme seu backend)
        await axios.post("http://localhost:3000/api/pedido/finalizar-compra", {
        itens: itensParaEnviar,
        usuarioId: usuario?._id || null
        });

      setLoading(false);
      setCarrinho([]); // limpa carrinho
      navigate("/compra-sucesso");
    } catch (error) {
      setLoading(false);
      setErro(
        error.response?.data?.mensagem ||
          "Erro ao finalizar compra. Tente novamente."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // impede recarregamento da página
    if (carrinho.length === 0) {
      setErro("Seu carrinho está vazio.");
      return;
    }
    handleFinalizar(); // só chamado se todos os campos required forem válidos
  };

  return (
    <>
      <Navbar logado={true} />

      <br />
      <br />

      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          backgroundColor: "white",
          textAlign: "center",
          margin: "50px auto",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#2E86AB",
          }}
        >
          Finalizar Compra
        </h1>

        <br />

        <form
          onSubmit={handleSubmit}
          className="finalizar-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "50px",
          }}
        >
          <div style={{ textAlign: "left", flex: "1" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
              Informações de Compra
            </h1>
            <br />

            <InputField
              placeholder={"Nome Completo"}
              width="100%"
              height="40px"
              required={true}
            />
            <InputField
              placeholder={"Endereço"}
              width="100%"
              height="40px"
              required={true}
            />
            <InputField
              placeholder={"Cidade"}
              width="100%"
              height="40px"
              required={true}
            />
            <InputField
              placeholder={"Estado"}
              width="100%"
              height="40px"
              required={true}
            />
            <InputField
              placeholder={"CEP"}
              width="100%"
              height="40px"
              required={true}
            />

            <br />

            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
              Informações de Pagamento
            </h1>
            <br />

            <InputField
              placeholder={"Número do cartão"}
              width="100%"
              height="40px"
              required={true}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <InputField
                placeholder={"Nome no cartão"}
                width="calc(60% - 10px)"
                height="40px"
                required={true}
              />
              <InputField
                placeholder={"CVV"}
                width="calc(40% - 10px)"
                height="40px"
                required={true}
              />
            </div>
          </div>

          <div
            className="resumo-pedido"
            style={{
              textAlign: "left",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
              Resumo do Pedido
            </h1>

            <div
              className="resumo-bloco"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                borderBottom: "1px solid lightgray",
                paddingBottom: "10px",
              }}
            >
              {carrinho.length === 0 ? (
                <p>Carrinho vazio.</p>
              ) : (
                carrinho.map((item, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ fontWeight: "bold" }}>{item.nome}</p>
                    <p style={{ fontWeight: "bold" }}>
                      R$ {parseFloat(item.preco).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div
              className="resumo-bloco"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                borderBottom: "1px solid lightgray",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ fontWeight: "bold" }}>Subtotal</p>
                <p style={{ fontWeight: "bold" }}>
                  R$ {subtotal.toFixed(2).replace(".", ",")}
                </p>
              </div>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ fontWeight: "bold" }}>Frete</p>
                <p style={{ fontWeight: "bold" }}>
                  R$ {frete.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>

            <div
              className="resumo-bloco"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                borderBottom: "1px solid lightgray",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ fontWeight: "bold" }}>Total</p>
                <p style={{ fontWeight: "bold" }}>
                  R$ {total.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <GerarBotao
                cor={0}
                label={loading ? "Processando..." : "Finalizar Compra"}
                className="px-8 py-4"
                type="submit"
                disabled={loading}
              />
            </div>

            {erro && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {erro}
              </p>
            )}
          </div>
        </form>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .finalizar-container {
              flex-direction: column;
              align-items: center;
              gap: 20px;
            }

            .finalizar-container > div {
              width: 100%;
            }

            .resumo-pedido .resumo-bloco {
              width: 100%;
              gap: 20px;
            }

            .resumo-pedido .resumo-bloco > div {
              width: 100%;
            }

            .resumo-pedido > div:last-child {
              width: 100%;
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>

      <Footer />
    </>
  );
}

export default FinalizarCompra;
