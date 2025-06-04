import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";

function EditarProduto({ livros, setLivros }) {
  const location = useLocation();
  const navigate = useNavigate();

  // “produto” vem de location.state.produto (enviado pelo VendasEstoque)
  const produto = location.state?.produto;

  // Estados iniciais com os dados atuais do livro
  const [idProduto, setIdProduto] = useState("");
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(""); // opcional, se quiser editar imagem

  useEffect(() => {
    if (produto) {
      setIdProduto(produto.id);
      setNome(produto.nome);
      setAutor(produto.autor);
      setPreco(produto.preco);
      setEstoque(produto.estoque);
      setDescricao(produto.descricao || "");
      setFoto(produto.foto || "");
    }
  }, [produto]);

  const handleSalvar = () => {
    // Remove “R$ ” caso o usuário tenha deixado algo no campo, mas 
    // no nosso caso preco vem puro (sem “R$ ”). Apenas garantir string.
    const precoFormatado = String(preco);

    const novosDados = {
      id: idProduto,
      nome: nome,
      autor: autor,
      preco: precoFormatado,
      estoque: estoque,
      descricao: descricao,
      foto: foto
    };

    // Atualiza a lista de livros: substitui o livro cujo id bate
    const atualizado = livros.map((l) =>
      l.id === idProduto ? novosDados : l
    );

    setLivros(atualizado);
    navigate("/admin");
  };

  return (
    <>
      <Navbar logado={true} admin={true} />
      <br />
      <br />
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "white",
          textAlign: "center",
          margin: "50px auto",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#2E86AB"
          }}
        >
          Editar Produto
        </h1>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            margin: "20px 0"
          }}
        >
          <div
            style={{
              width: "250px",
              height: "400px",
              backgroundColor: "#ccc"
            }}
          ></div>

          <InputField
            placeholder={"Título"}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            width="100%"
            height="40px"
          />

          <InputField
            placeholder={"Autor"}
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            width="100%"
            height="40px"
          />

          <InputField
            placeholder={"Preço"}
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            width="100%"
            height="40px"
          />

          <InputField
            placeholder={"Estoque"}
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
            width="100%"
            height="40px"
          />

          <InputField
            placeholder={"Descrição"}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            width="100%"
            height="100px"
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px"
          }}
        >
          <GerarBotao
            cor={2}
            label="Voltar"
            className="px-4 py-2"
            to="/admin"
          />
          <GerarBotao
            cor={0}
            label="Salvar"
            className="px-4 py-2"
            onClick={handleSalvar}
          />
        </div>
        <br />
      </div>
    </>
  );
}

export default EditarProduto;
