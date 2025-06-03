import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";
import Footer from "../components/Footer/Footer";

function FinalizarCompra() {
    const location = useLocation();
    const carrinho = location.state?.carrinho || [];

    const subtotal = carrinho.reduce((sum, item) => sum + parseFloat(item.preco), 0);
    const frete = 10.00;
    const total = subtotal + frete;
    

    return (
        <>
            <Navbar logado={true}></Navbar>

            <br /><br />

            <div style={{
                width: '90%',
                maxWidth: '1000px',
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
                }}>Finalizar Compra</h1>

                <br />

                <div className="finalizar-container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '50px'
                }}>

                    <div style={{ textAlign: 'left', flex: '1' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>Informações de Compra</h1>
                        <br />

                        <InputField placeholder={'Nome Completo'} width="100%" height="40px" />
                        <InputField placeholder={'Endereço'} width="100%" height="40px" />
                        <InputField placeholder={'Cidade'} width="100%" height="40px" />
                        <InputField placeholder={'Estado'} width="100%" height="40px" />
                        <InputField placeholder={'CEP'} width="100%" height="40px" />

                        <br />

                        <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>Informações de Pagamento</h1>
                        <br />

                        <InputField placeholder={'Número do cartão'} width="100%" height="40px" />

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
                            <InputField placeholder={'Nome no cartão'} width="calc(60% - 10px)" height="40px" />
                            <InputField placeholder={'CVV'} width="calc(40% - 10px)" height="40px" />
                        </div>
                    </div>

                    <div className="resumo-pedido" style={{
                        textAlign: 'left',
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>Resumo do Pedido</h1>

                        <div className="resumo-bloco" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            borderBottom: "1px solid lightgray",
                            paddingBottom: "10px"
                        }}>
                            {carrinho.length === 0 ? (
                                <p>Carrinho vazio.</p>
                            ) : (
                                carrinho.map((item) => (
                                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontWeight: 'bold' }}>{item.nome}</p>
                                        <p style={{ fontWeight: 'bold' }}>R$ {parseFloat(item.preco).toFixed(2).replace('.', ',')}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Subtotal e Frete */}
                        <div className="resumo-bloco" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            borderBottom: "1px solid lightgray",
                            paddingBottom: "10px"
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Subtotal</p>
                                <p style={{ fontWeight: 'bold' }}>R$ {subtotal.toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Frete</p>
                                <p style={{ fontWeight: 'bold' }}>R$ {frete.toFixed(2).replace('.', ',')}</p>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="resumo-bloco" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            borderBottom: "1px solid lightgray",
                            paddingBottom: "10px"
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Total</p>
                                <p style={{ fontWeight: 'bold' }}>R$ {total.toFixed(2).replace('.', ',')}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <GerarBotao cor={0} label="Finalizar Compra" className="px-8 py-4" to="/compra-sucesso" />
                        </div>
                    </div>
                </div>
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
    )
}

export default FinalizarCompra;
