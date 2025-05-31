import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditarProduto() {
    const location = useLocation();
    const navigate = useNavigate();

    const produto = location.state?.produto;

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [idProduto, setIdProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState('');
    const [descricao, setDescricao] = useState('');

useEffect(() => {
    if (produto) {
        setTitulo(produto.titulo);
        setIdProduto(produto.id);
        setPreco(produto.preco);
        setEstoque(produto.quantidade);
        setAutor(produto.autor);
        setDescricao(produto.descricao);
    }
}, [produto]);


    const handleSalvar = () => {
        console.log({
            titulo,
            autor,
            idProduto,
            preco,
            estoque,
            descricao
        });
        navigate('/estoque-vendas');
    };

    return (
        <>
            <Navbar logado={true} admin={true} />
            <br /><br />
            <div style={{
                width: '90%',
                maxWidth: '600px',
                backgroundColor: 'white',
                textAlign: 'center',
                margin: '50px auto',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: '#2E86AB' }}>
                    Editar Produto
                </h1>
                <br />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    margin: '20px 0'
                }}>
                    <div style={{
                        width: '250px',
                        height: '400px',
                        backgroundColor: '#ccc'
                    }}></div>

                    <InputField
                        placeholder={'Título'}
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Autor'}
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'ID Produto'}
                        value={idProduto}
                        onChange={e => setIdProduto(e.target.value)}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Preço'}
                        value={preco}
                        onChange={e => setPreco(e.target.value)}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Estoque'}
                        value={estoque}
                        onChange={e => setEstoque(e.target.value)}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Descrição'}
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        width="100%"
                        height="100px"
                    />
                </div>
                <br />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '10px'
                }}>
                    <GerarBotao
                        cor={2}
                        label="Voltar"
                        className="px-4 py-2"
                        to="/estoque-vendas"
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
