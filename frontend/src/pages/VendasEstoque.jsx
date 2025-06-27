import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import RelatorioHeader from "../components/RelatorioHeader/RelatorioHeader";
import RelatorioItem from "../components/RelatorioItem/RelatorioItem";
import EstoqueHeader from "../components/EstoqueHeader/EstoqueHeader";
import EstoqueItem from "../components/EstoqueItem/EstoqueItem";
import GerarBotao from "../components/Botao/Botao";

const VendasEstoque = ({ livros, setLivros }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const resposta = await axios.get("http://localhost:3000/api/produtos");
        setLivros(resposta.data);
      } catch (error) {
        console.error("Erro ao carregar produtos do backend:", error);
      }
    };

    carregarLivros();
  }, [setLivros]);

  const removerProduto = async (_id) => {
    if (window.confirm("Tem certeza que quer remover este produto do estoque?")) {
      try {
        await axios.delete(`http://localhost:3000/api/produtos/${_id}`);
        setLivros((prev) => prev.filter((livro) => livro._id !== _id));
      } catch (error) {
        console.error("Erro ao remover produto:", error);
        alert("Erro ao remover o produto.");
      }
    }
  };

  return (
    <>
      <Navbar logado={true} admin={true} />

      <br />
      <br />
      <br />
      <br />

      <div
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
          Painel Administrativo
        </h1>

        <br />

        {/* Relatório ainda estático */}
        <div>
          <div style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>
            <p style={{ fontWeight: "bold", textAlign: "left" }}>Relatório de Vendas</p>
          </div>
          <br />
          <RelatorioHeader />
          <RelatorioItem
            idpedido={1001}
            cliente={"Ana Souza"}
            data={"24/04/2025"}
            livros={2}
            total={"R$ 59,80"}
          />
          <RelatorioItem
            idpedido={1002}
            cliente={"João Lima"}
            data={"25/04/2025"}
            livros={1}
            total={"R$ 34,90"}
          />
        </div>

        <br />
        <br />

        <div>
          <div style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>
            <p style={{ fontWeight: "bold", textAlign: "left" }}>Estoque de Livros</p>
          </div>
          <br />
          <EstoqueHeader />

          {livros.map((livro) => (
            <EstoqueItem
              key={livro._id}
              id="id"
              titulo={livro.nome}
              quantidade={livro.estoque}
              preco={`R$ ${Number(livro.preco).toFixed(2)}`}
              autor={livro.autor}
              descricao={livro.descricao}
              onDelete={() => removerProduto(livro._id)}
              onEdit={() => navigate("/editar", { state: { produto: livro } })}
            />
          ))}
        </div>

        <br />
        <br />

        <GerarBotao
          cor={0}
          label="Adicionar Produto"
          className="px-32 py-2"
          to="/adicionar-produto"
        />
      </div>
    </>
  );
};

export default VendasEstoque;
