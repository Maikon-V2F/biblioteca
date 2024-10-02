import { useNavigate } from "react-router-dom"; // importa navegação
import Button from '@mui/material/Button'; // importa botão do Material-UI

export default function LogOut() {
  const navigate = useNavigate(); // inicializa a navegação

  const handleLogout = (event) => {
    event.preventDefault(); // evita o comportamento padrão do evento

    localStorage.setItem("loggedInUser", "notLogged"); // atualiza o estado de login no localStorage
    console.log(localStorage.getItem("loggedInUser")); // exibe o estado atual no console
    alert("Usuário deslogado!"); // alerta de logout bem-sucedido

    navigate("/"); // redireciona para a página inicial
  };

  return (
    <Button variant="contained" type="submit" onClick={handleLogout}> {/* botão para sair */}
      Sair
    </Button>
  );
}
