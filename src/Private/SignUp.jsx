import { useState, useEffect } from "react"; // importa hooks useState e useEffect
import { useNavigate } from "react-router"; // importa navegação
import { Link } from "react-router-dom"; // importa Link para navegação
import "../styles/login.css"; // importa o CSS para o componente de cadastro
import TextField from "@mui/material/TextField"; // importa campo de texto do Material-UI
import Button from '@mui/material/Button'; // importa botão do Material-UI

export default function SignUp() {
  const navigate = useNavigate(); // inicializa a navegação

  const [email, setEmail] = useState(""); // estado para armazenar o email
  const [password, setPassword] = useState(""); // estado para armazenar a senha
  const [users, setUsers] = useState([]); // estado para armazenar os usuários

  // Carregar usuários do localStorage ao iniciar o componente
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // obtém usuários do localStorage
    setUsers(storedUsers); // atualiza o estado dos usuários
  }, []);

  function handleEmail(event) {
    setEmail(event.target.value); // atualiza o estado do email
  }

  function handlePassword(event) {
    setPassword(event.target.value); // atualiza o estado da senha
  }

  function handleSubmit(event) {
    event.preventDefault(); // evita o comportamento padrão do formulário

    const newUser = { // cria um novo usuário
      email: email,
      password: password,
    };

    // Adicionar novo usuário e salvar no localStorage
    const updatedUsers = [...users, newUser]; // atualiza a lista de usuários
    setUsers(updatedUsers); // atualiza o estado dos usuários
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // armazena no localStorage

    alert("Cadastro bem-sucedido"); // alerta de cadastro bem-sucedido
    console.log("Cadastro e login bem-sucedido!"); // log para depuração

    localStorage.setItem("loggedInUser", "logged"); // define usuário como logado

    navigate("/"); // redireciona para a página inicial

    setEmail(""); // limpa o campo de email
    setPassword(""); // limpa o campo de senha
  }

  return (
    <div className="container"> {/* container do formulário de cadastro */}
      <h2>Faça seu cadastro</h2> {/* título do formulário */}
      <form className="form" onSubmit={handleSubmit}> {/* formulário */}
        <div className="containerInput">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            type="email"
            value={email} // valor do campo de email
            onChange={handleEmail} // chama função ao alterar
            required
          />
        </div>
        <div className="containerInput">
          <TextField
            id="filled-basic"
            label="Senha"
            variant="filled"
            type="password"
            value={password} // valor do campo de senha
            onChange={handlePassword} // chama função ao alterar
            required
          />
        </div>
        <Button variant="contained" type="submit">Cadastrar-se</Button> {/* botão para cadastrar */}
      </form>
      <br />
      <div className="containerSignup">
        <p>Já possui uma conta?</p> {/* mensagem para usuários já cadastrados */}
         <br />
        <Link to="/login">
          <Button variant="contained" className="btnSignup">Entrar</Button> {/* botão para ir para login */}
        </Link>
      </div>
    </div>
  );
}
