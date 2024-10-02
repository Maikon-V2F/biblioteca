import { useState } from "react"; // importa hook useState
import { Navigate, useNavigate, Link } from "react-router-dom"; // importa navegação
import "../styles/LogIn.css"; // importa o CSS para o componente de login
import TextField from "@mui/material/TextField"; // importa campo de texto do Material-UI
import Button from '@mui/material/Button'; // importa botão do Material-UI

export default function LogIn() {
  const navigate = useNavigate(); // inicializa a navegação

  const [email, setEmail] = useState(""); // estado para armazenar o email
  const [password, setPassword] = useState(""); // estado para armazenar a senha

  function handleEmail(event) {
    setEmail(event.target.value); // atualiza o estado do email
  }

  function handlePassword(event) {
    setPassword(event.target.value); // atualiza o estado da senha
  }

  function handleSubmit(event) {
    event.preventDefault(); // evita o comportamento padrão do formulário

    const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // obtém usuários do localStorage

    const user = storedUsers.find( // verifica se o usuário existe
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login bem-sucedido"); // alerta de login bem-sucedido
      localStorage.setItem("loggedInUser", "logged"); // armazena usuário logado
      navigate("/books"); // redireciona para a página de livros
    } else {
      alert("Email ou senha incorretos."); // alerta de erro no login
    }
  }

  const LoggedInUser = localStorage.getItem("loggedInUser"); // verifica se já está logado

  if (LoggedInUser === "logged") { // se já estiver logado
    return alert("Você já está logado!"), (<Navigate to="/" />); // redireciona para a página inicial
  } else {
    return (
      <div className="container"> {/* container do formulário de login */}
        <h2>Faça seu login</h2> {/* título do formulário */}
        <form className="form" onSubmit={handleSubmit}> {/* formulário */}
          <div className="containerInput">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
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
              onChange={handlePassword} // chama função ao alterar
              required
            />
          </div>

          <Button variant="contained" type="submit">Entrar</Button> {/* botão de submit */}
          
        </form>
        <br />
        <div className="containerSignup">
          <p>Ainda não tem conta?</p><br />
          <Link to="/signup">
            <Button variant="contained" className="btnSignup">Cadastre-se</Button> {/* botão de cadastro */}
          </Link>
        </div>
      </div>
    );
  }
}
