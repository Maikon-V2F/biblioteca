import React from "react"; 
import { Navigate, Outlet } from "react-router-dom"; // importa navegação e componente Outlet

export default function PrivateRoute() {
  const logged = localStorage.getItem('loggedInUser'); // verifica se o usuário está logado

  if (logged === 'logged') { // se o usuário estiver logado
    return <Outlet />; // renderiza o componente filho
  } else {
    alert("Faça login para continuar"); // alerta se o usuário não estiver logado
    return <Navigate to="/login" />; // redireciona para a página de login
  }
}
