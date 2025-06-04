import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import RelatorioHeader from "../components/RelatorioHeader/RelatorioHeader";
import RelatorioItem from "../components/RelatorioItem/RelatorioItem";
import EstoqueHeader from "../components/EstoqueHeader/EstoqueHeader";
import EstoqueItem from "../components/EstoqueItem/EstoqueItem";
import GerarBotao from "../components/Botao/Botao";

const VendasEstoque = ({ livros, setLivros }) => {
  const navigate = useNavigate();

  // Função para remover produto do array "livros"
  const removerProduto = (id) => {
    const novoArray = livros.filter((livro) => livro.id !== id);
    setLivros(novoArray);
  };

  return (
    <>
      <Navbar logado={true} admin={true} />

      {/* somente para dar espaçamento no topo */}
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
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h1
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#2E86AB"
          }}
        >
          Painel Administrativo
        </h1>

        <br />

        <div>
          {/* -------- RELATÓRIO DE VENDAS (estático, conforme seu exemplo) -------- */}
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
          {/* -------- ESTOQUE DINÂMICO A PARTIR DO STATE "livros" -------- */}
          <div style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>
            <p style={{ fontWeight: "bold", textAlign: "left" }}>Estoque de Livros</p>
          </div>
          <br />
          <EstoqueHeader />

          {livros.map((livro) => (
            <EstoqueItem
              key={livro.id}
              id={livro.id}
              titulo={livro.nome}
              quantidade={livro.estoque}
              preco={`R$ ${Number(livro.preco).toFixed(2)}`}
              autor={livro.autor}
              descricao={livro.descricao}
              onDelete={() => {
                if (
                  window.confirm("Tem certeza que quer remover este produto do estoque?")
                ) {
                  removerProduto(livro.id);
                }
              }}
              onEdit={() => {
                // Navega para /editar, passando o objeto "livro" via state
                navigate("/editar", { state: { produto: livro } });
              }}
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
