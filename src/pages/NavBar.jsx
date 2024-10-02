// Importa css
import "../styles/index.css";
import "../styles/NavBar.css";

import Button from '@mui/material/Button'; // Importa botao do material-ui

import LogOut from "../Private/LogOut"; // Importa logica do logout
import { Link } from "react-router-dom";// Importa  Link do react-router-dom

// Funcao principal
export default function NavBar() {
  
  // Renderiza botoes
  return (
    <div className="containerNavBar">
      <h1>BIBLIOTECA</h1>
      <div className="containerBtns">
        <Link to="/">
          <Button variant="contained" style={{marginRight: '0.8vw'}}>Home</Button>
        </Link>
        <Link to="/books">
        <Button variant="contained" style={{marginRight: '0.8vw'}}>Coleção</Button>
        </Link>
        <Link to="/login">
          <Button variant="contained" style={{marginRight: '0.8vw'}}>Login</Button>
        </Link>
        
        <LogOut/>{/* Renderiza botao de logout*/}
        
      </div>
    </div>
  );
}
