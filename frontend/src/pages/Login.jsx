import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/InputField/InputField";
import GerarBotao from "../components/Botao/Botao";

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