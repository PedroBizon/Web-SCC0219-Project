import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";
import { useEstoque } from "../hooks/useEstoque";

function AdicionarProduto() {
    const { adicionarProduto, estoque } = useEstoque();
    const navigate = useNavigate();

    const [produto, setProduto] = useState({
        id: '',
        titulo: '',
        autor: '',
        preco: '',
        estoque: '',
        descricao: ''
    });

    const handleChange = (field, value) => {
        setProduto(prev => ({ ...prev, [field]: value }));
    };

    const handleSalvar = () => {
        if (!produto.titulo || !produto.preco) {
            alert('Preencha os campos obrigatórios: Título e Preço.');
            return;
        }

        const proximoId = estoque.length > 0
            ? Math.max(...estoque.map(p => parseInt(p.id, 10))) + 1
            : 1;

        const novoProduto = {
            ...produto,
            id: proximoId,
            preco: parseFloat(produto.preco).toFixed(2),
            estoque: parseInt(produto.estoque, 10)
        };

        adicionarProduto(novoProduto);
        navigate('/admin');
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
                <h1 style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '25px',
                    color: '#2E86AB'
                }}>
                    Adicionar Produto
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
                        placeholder="Título"
                        width="100%"
                        height="40px"
                        value={produto.titulo}
                        onChange={(e) => handleChange('titulo', e.target.value)}
                    />

                    <InputField
                        placeholder="Autor"
                        width="100%"
                        height="40px"
                        value={produto.autor}
                        onChange={(e) => handleChange('autor', e.target.value)}
                    />

                    <InputField
                        placeholder="Preço"
                        width="100%"
                        height="40px"
                        value={produto.preco}
                        onChange={(e) => handleChange('preco', e.target.value)}
                    />

                    <InputField
                        placeholder="Estoque"
                        width="100%"
                        height="40px"
                        value={produto.estoque}
                        onChange={(e) => handleChange('estoque', e.target.value)}
                    />

                    <InputField
                        placeholder="Descrição"
                        width="100%"
                        height="100px"
                        value={produto.descricao}
                        onChange={(e) => handleChange('descricao', e.target.value)}
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

export default AdicionarProduto;
