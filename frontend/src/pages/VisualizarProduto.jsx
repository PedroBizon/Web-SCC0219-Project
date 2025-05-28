import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import GerarBotao from "../components/Botao/Botao"

function VisualizarProduto() {
    return(
    <>
        <Navbar logado></Navbar>

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

            <h1 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: '#2E86AB'}}>Livro Exemplo 1</h1>

            <br></br>

            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px', margin: '20px 0'}}>

                <div style={{width: '400px', height: '550px', backgroundColor: '#ccc', marginLeft: '5%'}}></div>

                <div style={{marginLeft: '4%', flex: 1, display: 'flex', flexDirection: 'column', gap: '50px'}}>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px'}}>
                        <p style={{color: 'gray', fontWeight: 'bold'}}>Título</p>
                        <p style={{color: 'gray'}}>Exemplo 1</p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px'}}>
                        <p style={{color: 'gray', fontWeight: 'bold'}}>Autor</p>
                        <p style={{color: 'gray'}}>Autor Exemplo 1</p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px'}}>
                        <p style={{color: 'gray', fontWeight: 'bold'}}>Preço</p>
                        <p style={{color: 'gray'}}>Preço Exemplo 1</p>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px', width: '100%'}}>
                        <p style={{color: 'gray', fontWeight: 'bold'}}>Descrição</p>
                        <br></br>
                        <p style={{color: 'gray', textAlign: 'justify'}}>Este é um livro de exemplo com uma descrição longa que ocupa toda a largura disponível.</p>
                    </div>

                </div>

                </div>

                    <br></br><br></br>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 10%'}}>

                    <GerarBotao
                    cor={0}
                    label="Voltar"
                    className="px-8 py-4"
                    />

                    <GerarBotao
                    cor={0}
                    label="Adicionar ao carrinho"
                    className="px-8 py-4"
                    />

                </div>
        
                <br></br>

        </div>
        
    </>
    )
}

export default VisualizarProduto;