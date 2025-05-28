import Navbar from "../components/Navbar/Navbar";
import ClientHeader from "../components/ClientHeader/ClienteHeader"
import ClientData from "../components/ClientData/ClientData"

function AdminCliente() {
    return(
    <>
        <Navbar logado={true} admin={true}></Navbar>

        <style>{`

        @media (max-width: 600px) {

        .container-admin {

        width: 95% !important;
        padding: 10px !important;

        }
        }

        `}</style>

        <br></br><br></br><br></br><br></br>

        <div className="container-admin" style={
        {width: '80%', 
        height: 'auto', 
        backgroundColor: 'white',
        textAlign: 'center', 
        margin: 'auto',
        borderRadius: '10px', 
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

            <h1 style={{textAlign: 'left', fontWeight: 'bold', fontSize: '25px', color: '#2E86AB'}}>Perfil Administrativo</h1>

            <br></br>

            <div style={{borderBottom: '1px solid lightgray', paddingBottom: '5px'}}><p style={{fontWeight: 'bold', textAlign: 'left'}}>Clientes</p></div>

            <br></br>

            <ClientHeader></ClientHeader>

            <ClientData
            id={'001'}
            nome={'Maria da Silva'}
            telefone={'(11) 91234-5678'}
            email={'maria@email.com'}
            ></ClientData>

            <ClientData
            id={'002'}
            nome={'João Lima'}
            telefone={'(16) 92323-1235'}
            email={'joao@email.com'}
            ></ClientData>
            
            <ClientData
            id={'003'}
            nome={'Ana Souza'}
            telefone={'(11) 94442-1112'}
            email={'ana@email.com'}
            ></ClientData>



            <br></br><br></br>

        </div>

    </>
    )
}

export default AdminCliente;