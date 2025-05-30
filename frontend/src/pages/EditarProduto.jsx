import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";

function EditarProduto() {
    return (
        <>
            <Navbar logado={true} admin={true}></Navbar>

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
                    Livro Exemplo 1
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
                        defaultValue={'Título Exemplo'}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Autor'}
                        defaultValue={'Autor Exemplo'}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'ID Produto'}
                        defaultValue={'ID Produto Exemplo'}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Preço'}
                        defaultValue={'Preço Exemplo'}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Estoque'}
                        defaultValue={'Estoque Exemplo'}
                        width="100%"
                        height="40px"
                    />

                    <InputField
                        placeholder={'Descrição'}
                        defaultValue={'Descrição Exemplo'}
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
                        to = "/estoque-vendas"
                    />

                    <GerarBotao
                        cor={0}
                        label="Salvar"
                        className="px-4 py-2"
                        to = "/estoque-vendas"
                    />

                </div>

                <br />
            </div>
        </>
    );
}

export default EditarProduto;
