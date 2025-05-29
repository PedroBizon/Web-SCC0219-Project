import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";

function FinalizarCompra() {
    return (
        <>
            <Navbar logado={true}></Navbar>

            <br /><br />

            <div style={{
                width: '90%',
                maxWidth: '1000px',
                height: 'auto',
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

                    <div className="resumo-pedido" style={{ textAlign: 'left', flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>Resumo do Pedido</h1>

                        <div className="resumo-bloco" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            borderBottom: "1px solid lightgray",
                            paddingBottom: "10px"
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Livro Exemplo 1</p>
                                <p style={{ fontWeight: 'bold' }}>R$ 49,99</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Livro Exemplo 2</p>
                                <p style={{ fontWeight: 'bold' }}>R$ 79,99</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Livro Exemplo 3</p>
                                <p style={{ fontWeight: 'bold' }}>R$ 29,99</p>
                            </div>
                        </div>

                        <div className="resumo-bloco" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            borderBottom: "1px solid lightgray",
                            paddingBottom: "10px"
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Subtotal</p>
                                <p style={{ fontWeight: 'bold' }}>R$ 159,97</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Frete</p>
                                <p style={{ fontWeight: 'bold' }}>R$ 10,00</p>
                            </div>
                        </div>

                        <div className="resumo-bloco" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            borderBottom: "1px solid lightgray",
                            paddingBottom: "10px"
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold' }}>Total</p>
                                <p style={{ fontWeight: 'bold' }}>R$ 169,97</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <GerarBotao cor={0} label="Finalizar Compra" className="px-8 py-4" />
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
        </>
    )
}

export default FinalizarCompra;
