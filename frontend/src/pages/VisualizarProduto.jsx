import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import GerarBotao from "../components/Botao/Botao";

const VisualizarProduto = ({ carrinho, setCarrinho, logado }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { livro } = location.state || {};

    if (!livro) {
        navigate("/");
        return null;
    }

    const handleAddToCart = () => {
        setCarrinho([...carrinho, livro]);
        alert("Produto adicionado ao carrinho");
    };

    return (
        <>
            <Navbar logado={logado} />
            <br /><br />

            <div style={{
                width: '50%',
                height: 'auto',
                backgroundColor: 'white',
                textAlign: 'center',
                margin: '100px auto',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '25px',
                    color: '#2E86AB'
                }}>{livro.nome}</h1>

                <br />

                <div className="produto-container" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    margin: '20px 0'
                }}>
                    <div className="produto-imagem" style={{
                        width: '400px',
                        height: '550px',
                        backgroundColor: '#ccc',
                        marginLeft: '5%',
                        backgroundImage: `url(${livro.imagem || '/imagens/default.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    <div className="produto-info" style={{
                        marginLeft: '4%',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '35px'  // espaçamento maior
                    }}>
                        <div className="info-bloco" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '10px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: 'gray', fontWeight: 'bold' }}>Título</p>
                            <p style={{ color: 'gray' }}>{livro.nome}</p>
                        </div>

                        <div className="info-bloco" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '10px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: 'gray', fontWeight: 'bold' }}>Autor</p>
                            <p style={{ color: 'gray' }}>{livro.autor}</p>
                        </div>

                        <div className="info-bloco" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '10px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: 'gray', fontWeight: 'bold' }}>Preço</p>
                            <p style={{ color: 'gray' }}>R$ {livro.preco}</p>
                        </div>

                        {/* Aqui o estoque agora */}
                        <div className="info-bloco" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '10px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: 'gray', fontWeight: 'bold' }}>Estoque</p>
                            <p style={{ color: 'gray' }}>{livro.estoque ?? 'Indisponível'}</p>
                        </div>

                        {/* E aqui a descrição, no fim */}
                        <div className="info-bloco" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '10px',
                            marginBottom: '10px',
                            width: '100%'
                        }}>
                            <p style={{ color: 'gray', fontWeight: 'bold' }}>Descrição</p>
                            <br />
                            <p style={{ color: 'gray', textAlign: 'justify' }}>{livro.descricao}</p>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="botoes-container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0 10%'
                }}>
                    <GerarBotao
                        cor={0}
                        label="Voltar"
                        className="botao-produto px-8 py-4"
                        to="/"
                    />

                    <GerarBotao
                        cor={0}
                        label="Adicionar ao Carrinho"
                        className="botao-produto px-8 py-4"
                        onClick={handleAddToCart}
                    />
                </div>

                <br />
            </div>

            <style>
                {`
                    @media (max-width: 768px) {
                        .produto-container {
                            flex-direction: column;
                            align-items: center;
                        }

                        .produto-imagem {
                            width: 200px !important;
                            height: 300px !important;
                            margin-left: 0 !important;
                        }

                        .produto-info {
                            margin-left: 0 !important;
                            width: 100%;
                            gap: 20px !important;
                        }

                        .info-bloco {
                            flex-direction: column !important;
                            align-items: flex-start !important;
                        }

                        .info-bloco p {
                            width: 100%;
                        }

                        .botoes-container {
                            flex-direction: column;
                            gap: 10px;
                            margin: 0 5% !important;
                            align-items: stretch;
                        }

                        .botao-produto {
                            padding: 8px 16px !important;
                            font-size: 14px !important;
                        }
                    }
                `}
            </style>

            <Footer />
        </>
    );
};

export default VisualizarProduto;
