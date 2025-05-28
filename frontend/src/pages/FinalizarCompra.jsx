import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";

function FinalizarCompra() {
    return(
    <>
        <Navbar logado={true}></Navbar>

        <br></br><br></br>

        <div style={
        {width: '50%', 
        height: 'auto', 
        backgroundColor: 'white',
        textAlign: 'center', 
        margin: '100px auto',
        borderRadius: '10px', 
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

            <h1 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: '#2E86AB'}}>Finalizar Compra</h1>

            <br></br>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                <div style={{textAlign: 'left'}}>

                    <h1 style={{fontWeight: 'bold', fontSize: '20px'}}>Informações de Compra</h1>
                    <br></br>

                    <InputField placeholder={'Nome Completo'} width="400px" height="40px" />
                    <InputField placeholder={'Endereço'} width="400px" height="40px" />
                    <InputField placeholder={'Cidade'} width="400px" height="40px" />
                    <InputField placeholder={'Estado'} width="400px" height="40px" />
                    <InputField placeholder={'CEP'} width="400px" height="40px" />

                    <br></br>

                    <h1 style={{fontWeight: 'bold', fontSize: '20px'}}>Informações de Pagamento</h1>
                    <br></br>

                    <InputField placeholder={'Número do cartão'} width="400px" height="40px" />

                    <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                        <InputField placeholder={'Nome no cartão'} width="250px" height="40px" />
                        <InputField placeholder={'CVV'} width="130px" height="40px" />
                    </div>

                </div>

                <div style={{textAlign: 'right'}}>

                    <h1 style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'left'}}>Resumo do Pedido</h1>
                    <br></br>
                    
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px', borderBottom: "1px solid lightgray", paddingBottom: "10px"}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p style={{fontWeight: 'bold', paddingRight: '200px'}}>Livro Exemplo 1</p>
                            <p style={{fontWeight: 'bold'}}>R$ 49,99</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{fontWeight: 'bold'}}>Livro Exemplo 2</p>
                            <p style={{fontWeight: 'bold'}}>R$ 79,99</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{fontWeight: 'bold'}}>Livro Exemplo 3</p>
                            <p style={{fontWeight: 'bold'}}>R$ 29,99</p>
                        </div>
                    </div>

                    <br></br>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px', borderBottom: "1px solid lightgray", paddingBottom: "10px"}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{fontWeight: 'bold'}}>Subtotal</p>
                            <p style={{fontWeight: 'bold'}}>R$ 159,97</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{fontWeight: 'bold'}}>Frete</p>
                            <p style={{fontWeight: 'bold'}}>R$ 10,00</p>
                        </div>
                    </div>

                    <br></br>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px', borderBottom: "1px solid lightgray", paddingBottom: "10px"}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{fontWeight: 'bold'}}>Total</p>
                            <p style={{fontWeight: 'bold'}}>R$ 169,97</p>
                        </div>
                    </div>

                    <br></br>

                    <GerarBotao cor={0} label="Finalizar Compra" className="px-8 py-4" />

                </div>

            </div>

        </div>

    </>
    )
}

export default FinalizarCompra;
