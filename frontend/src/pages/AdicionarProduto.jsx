import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField"
import GerarBotao from "../components/Botao/Botao"


function EditarProduto() {
    return(
    <>
        <Navbar logado={true} admin={true}></Navbar>

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

            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px', margin: '20px 0'
            }}>

            <div style={{width: '400px', height: '550px', backgroundColor: '#ccc', marginLeft: '5%'}}></div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginLeft: 'auto', textAlign: 'left'}}>

            <InputField
            placeholder={'Título'}
            width="400px"
            height="40px"
            />

            <InputField
            placeholder={'Autor'}
            width="400px"
            height="40px"
            />
    
            <InputField
            placeholder={'ID Produto'}
            width="400px"
            height="40px"
            />

            <div style={{ display: 'flex', gap: '40px' }}>

                <InputField
                placeholder={'Preço'}
                width="180px"
                height="40px"
                />

                <InputField
                placeholder={'Estoque'}
                width="180px"
                height="40px"
                />

            </div>

            <InputField
            placeholder={'Descrição'}
            width="100%"
            height="100px"
            />

            </div>

            </div>

            <br></br><br></br>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 20%'}}>

                <GerarBotao
                cor={2}
                label="Excluir Produto"
                className="px-8 py-4"
                />

                <GerarBotao
                cor={0}
                label="Adicionar Produto"
                className="px-8 py-4"
                />

            </div>
        
            <br></br>

        </div>
    
    </>
    )
}

export default EditarProduto;