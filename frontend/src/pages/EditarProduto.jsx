import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditarProduto() {
  const location = useLocation();
  const navigate = useNavigate();
  const produto = location.state?.produto;

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [idProduto, setIdProduto] = useState("");

    useEffect(() => {
        if (produto) {
            setTitulo(produto.nome || produto.titulo || "");
            setAutor(produto.autor || "");
            setPreco((produto.preco || "").toString().replace("R$", "").trim());
            setEstoque(
            produto.estoque?.toString() ??
            produto.quantidade?.toString() ??
            ""
            );
            setDescricao(produto.descricao || "");
            setImagem(produto.imagem || "/imagens/default.jpg");
            setIdProduto(produto._id || produto.id || "");
        }
    }, [produto]);

  const handleSalvar = async () => {
    if (!titulo || !autor || !preco) {
      alert("Preencha os campos obrigatórios: Título, Autor e Preço.");
      return;
    }

    const precoNum = parseFloat(preco);
    const estoqueNum = parseInt(estoque, 10);

    if (isNaN(precoNum) || precoNum < 0) {
      alert("Preço inválido.");
      return;
    }

    if (isNaN(estoqueNum) || estoqueNum < 0) {
      alert("Estoque inválido.");
      return;
    }

    const dadosAtualizados = {
      nome: titulo,
      autor,
      preco: precoNum,
      estoque: estoqueNum,
      descricao,
      imagem: imagem || "/imagens/default.jpg"
    };

    try {
      await axios.put(`http://localhost:3000/api/produtos/${idProduto}`, dadosAtualizados);
      alert("Produto atualizado com sucesso!");
      navigate("/admin");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error.response?.data || error.message);
      alert("Erro ao salvar o produto.");
    }
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
              backgroundColor: "#ccc",
              backgroundImage: `url(${imagem})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>

          <InputField
            placeholder="URL da Imagem"
            width="100%"
            height="40px"
            value={imagem}
            onChange={e => setImagem(e.target.value)}
          />

          <InputField
            placeholder="Título"
            width="100%"
            height="40px"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />

          <InputField
            placeholder="Autor"
            width="100%"
            height="40px"
            value={autor}
            onChange={e => setAutor(e.target.value)}
          />

          <InputField
            placeholder="Preço"
            width="100%"
            height="40px"
            value={preco}
            onChange={e => setPreco(e.target.value)}
          />

          <InputField
            placeholder="Estoque"
            width="100%"
            height="40px"
            value={estoque}
            onChange={e => setEstoque(e.target.value)}
          />

          <InputField
            placeholder="Descrição"
            width="100%"
            height="100px"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
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
          <GerarBotao cor={2} label="Voltar" className="px-4 py-2" to="/admin" />
          <GerarBotao cor={0} label="Salvar" className="px-4 py-2" onClick={handleSalvar} />
        </div>

        <br />
      </div>
    </>
  );
}

export default EditarProduto;
