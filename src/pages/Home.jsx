// Importa css 
import "../styles/index.css"
import "../styles/Home.css"

import { Link } from "react-router-dom" //importa Link do react-router-dom
import Button from '@mui/material/Button'; //importa botao do  material-ui

// Funcao principal
export default function Home(){
    return (
        <div className="containerHome">
            <h1>Bem-vindo à biblioteca!</h1>
            <p>Descubra uma coleção incrível de livros.</p>
            <br />
            <Link to="/books"><Button variant="contained">Ver coleção</Button></Link>
        </div>
    )
}