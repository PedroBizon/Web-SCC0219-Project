import Navbar from "../components/Navbar/Navbar";
import RelatorioHeader from "../components/RelatorioHeader/RelatorioHeader";
import RelatorioItem from "../components/RelatorioItem/RelatorioItem";
import EstoqueHeader from "../components/EstoqueHeader/EstoqueHeader";
import EstoqueItem from "../components/EstoqueItem/EstoqueItem";
import GerarBotao from "../components/Botao/Botao";
import { useEstoque } from "../hooks/useEstoque";

function VendasEstoque() {
    const { estoque, removerProduto } = useEstoque();  // ✅ IMPORTANTE

    return (
        <>
            <Navbar logado={true} admin={true} />

            <br /><br /><br /><br />

            <div style={{
                width: '80%',
                height: 'auto',
                backgroundColor: 'white',
                textAlign: 'center',
                margin: 'auto',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: '25px',
                    color: '#2E86AB'
                }}>
                    Painel Administrativo
                </h1>

                <br />

                <div>
                    <div style={{ borderBottom: '1px solid lightgray', paddingBottom: '5px' }}>
                        <p style={{ fontWeight: 'bold', textAlign: 'left' }}>Relatório de Vendas</p>
                    </div>
                    <br />
                    <RelatorioHeader />
                    <RelatorioItem
                        idpedido={1001}
                        cliente={'Ana Souza'}
                        data={'24/04/2025'}
                        livros={2}
                        total={'R$ 59,80'}
                    />
                    <RelatorioItem
                        idpedido={1002}
                        cliente={'João Lima'}
                        data={'25/04/2025'}
                        livros={1}
                        total={'R$ 34,90'}
                    />
                </div>

                <br /><br />

                <div>
                    <div style={{ borderBottom: '1px solid lightgray', paddingBottom: '5px' }}>
                        <p style={{ fontWeight: 'bold', textAlign: 'left' }}>Estoque de Livros</p>
                    </div>
                    <br />
                    <EstoqueHeader />

                    {estoque.map(produto => (
                        <EstoqueItem
                            key={produto.id}
                            id={produto.id}
                            titulo={produto.titulo}
                            quantidade={produto.estoque}
                            preco={`R$ ${produto.preco}`}
                            onDelete={() => {
                                if (window.confirm('Tem certeza que quer remover este produto do estoque?')) {
                                    removerProduto(produto.id);
                                }
                            }}
                        />
                    ))} 

                </div>

                <br /><br />

                <GerarBotao
                    cor={0}
                    label="Adicionar Produto"
                    className="px-32 py-2"
                    to="/adicionar-produto"
                />
            </div>
        </>
    );
}

export default VendasEstoque;
