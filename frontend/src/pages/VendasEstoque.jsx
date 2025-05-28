import Navbar from "../components/Navbar/Navbar";
import RelatorioHeader from "../components/RelatorioHeader/RelatorioHeader"
import RelatorioItem from "../components/RelatorioItem/RelatorioItem"
import EstoqueHeader from "../components/EstoqueHeader/EstoqueHeader"
import EstoqueItem from "../components/EstoqueItem/EstoqueItem"
import GerarBotao from "../components/Botao/Botao";


function VendasEstoque() {
    return(
    <>
        <Navbar></Navbar>

        <div style={
        {width: '1060px', 
        height: '730px', 
        backgroundColor: 'white',
        textAlign: 'center', 
        margin: 'auto',
        borderRadius: '10px', 
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

            <h1 style={{textAlign: 'left', marginLeft: '10px', fontWeight: 'bold', fontSize: '25px', color: '#2E86AB'}}>Painel Administrativo</h1>

            <div style={{borderBottom: '1px solid gray'}}><p style={{fontWeight: 'bold'}}>Relatório de Vendas</p></div>
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

            <br></br>

            <div style={{borderBottom: '1px solid gray'}}><p style={{fontWeight: 'bold'}}>Estoque de Livros</p></div>
            <EstoqueHeader></EstoqueHeader>
            <EstoqueItem
            id={'001'}
            titulo={'Dom Casmurro'}
            quantidade={25}
            preco={'R$ 29,90'}
            ></EstoqueItem>
            <EstoqueItem
            id={'002'}
            titulo={'1984'}
            quantidade={10}
            preco={'R$ 34,90'}
            ></EstoqueItem>

            <GerarBotao cor={1} label='Adicionar Produto'></GerarBotao>

        </div>
    </>
    )
}

export default VendasEstoque;