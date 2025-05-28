import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";

/*         <Navbar></Navbar>
        <br></br> <br></br> <br></br>
        <div style={
            { backgroundColor: 'white',
            height: '520px', 
            width: '400px',
            textAlign: 'center', 
            margin: 'auto',
            borderRadius: '10px', 
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <br></br>
            <h1 style={{textAlign: 'left', marginLeft: '10px', fontWeight: 'bold', fontSize: '25px', color: '#2E86AB'}}>Bem-vindo de volta!</h1>
            <br></br>
            <p style={{textAlign: 'left', marginLeft: '10px'}}>Preencha os campos abaixo para se cadastrar na loja</p>
            
            <InputField width={340} height={34} label={'E-mail'}></InputField>
            <InputField width={340} label={'Senha'} height={34}></InputField>
                
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <GerarBotao cor={1} label='Entrar'></GerarBotao>
            </div>
            <br></br>
            <p style={{fontWeight: 'bold'}}>Ainda não tem uma conta?</p>
            <br></br>
            <p style={{fontWeight: 'bold', color: '#2E86AB'}}>Cadastre-se</p>

        </div>
    </> */

function Login() {
    return(
    <>
        <Navbar></Navbar>
        <br></br> <br></br> <br></br>
        <div className="bg-branco flex flex-col  w-1/2 justify-evenly items-start p-10">
            <h1>Bem vindo de volta!</h1>
            <br></br>
            <p>Preencha os campos abaixo para se cadastrar na loja</p>
            <InputField height={30} label={'E-mail'}></InputField>
            <InputField label={'Senha'} height={30}></InputField>

            <GerarBotao cor={1} label='Entrar'></GerarBotao>
        </div>
    </>
    )
}

export default Login;