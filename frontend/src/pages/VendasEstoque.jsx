import Navbar from "../components/Navbar/Navbar";
import RelatorioHeader from "../components/RelatorioHeader/RelatorioHeader"
import RelatorioItem from "../components/RelatorioItem/RelatorioItem"
import EstoqueHeader from "../components/EstoqueHeader/EstoqueHeader"
import EstoqueItem from "../components/EstoqueItem/EstoqueItem"
import GerarBotao from "../components/Botao/Botao";


function VendasEstoque() {
    return(
    <>
        <Navbar logado={true} admin={true}></Navbar>

        <br></br><br></br><br></br><br></br>

        <div style={
        {width: '80%', 
        height: 'auto', 
        backgroundColor: 'white',
        textAlign: 'center', 
        margin: 'auto',
        borderRadius: '10px', 
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

            <h1 style={{textAlign: 'left', fontWeight: 'bold', fontSize: '25px', color: '#2E86AB'}}>Painel Administrativo</h1>

            <br></br>
            <div>
            <div style={{borderBottom: '1px solid lightgray', paddingBottom: '5px'}}><p style={{fontWeight: 'bold', textAlign: 'left'}}>Relatório de Vendas</p></div>
            <br></br>
            <RelatorioHeader></RelatorioHeader>
            <RelatorioItem
            idpedido={1001}
            cliente={'Ana Souza'}
            data={'24/04/2025'}
            livros={2}
            total={'R$ 59,80'}
            ></RelatorioItem>
            <RelatorioItem
            idpedido={1002}
            cliente={'João Lima'}
            data={'25/04/2025'}
            livros={1}
            total={'R$ 34,90'}
            ></RelatorioItem>

            </div>

            <br></br><br></br>

            <div>
            <div style={{borderBottom: '1px solid lightgray', paddingBottom: '5px'}}><p style={{fontWeight: 'bold', textAlign: 'left'}}>Estoque de Livros</p></div>
            <br></br>
            <EstoqueHeader></EstoqueHeader>
            <EstoqueItem
            id={'001'}
            titulo={'Dom Casmurro'}
            quantidade={25}
            preco={'R$ 29,90'}
            onDelete={() => console.log('Editar produto 001')}
            ></EstoqueItem>
            <EstoqueItem
            id={'002'}
            titulo={'1984'}
            quantidade={10}
            preco={'R$ 34,90'}
            onDelete={() => console.log('Editar produto 002')}
            ></EstoqueItem>

            </div>
        
            <br></br><br></br>

            <GerarBotao
              cor={0}
              label="Adicionar Produto"
              className="px-32 py-2"
              to = "/adicionar-produto"
            />

        </div>
    </>
    )
}

export default VendasEstoque;