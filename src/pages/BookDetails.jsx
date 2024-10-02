import React, { useEffect, useState } from "react"; // Importa react hooks
import axios from "axios"; // Importa  axios para fazer requisições HTTP
import { API_URL, API_KEY } from "../api"; // Importa  as variáveis de ambiente API_URL e API_KEY
import { Link, useParams } from "react-router-dom"; // Importa  Link e useParams para navegação entre páginas
import "../styles/BookDetails.css"; // Importa  o arquivo de estilos para a página de detalhes do livro
import Button from '@mui/material/Button';  // Importa o componente Button do Material UI

// Funcao principal
export default function BookDetails() {
  // Pega o id do livro pelo useParams
  const { bookId } = useParams();

  const [book, setBook] = useState(null); // Estado inicial do livro como null
  const [loading, setLoading] = useState(true); // Estado de carregamento

  console.log(bookId)

  // Função para buscar o livro pela API
  const fetchBook = async () => {
    try {
      const response = await axios.get(`${API_URL}/${bookId}?key=${API_KEY}`);
      setBook(response.data); // Armazena os detalhes do livro
      setLoading(false); // Desativa o estado de carregamento
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
      setLoading(false); // Desativa o estado de carregamento mesmo em caso de erro
    }
  };

  // Chama a função fetchBook ao carregar o componente
  useEffect(() => {
    if (bookId) {
      fetchBook();
    }
  }, [bookId]); // Executa o fetchBook toda vez que o bookId for atualizado

  // Retorna caso livros ainda estejam carregando
  if (loading) {
    return <p>Carregando detalhes do livro...</p>;
  }
  
  // retorna se livro nao foi encontrado
  if (!book || !book.volumeInfo) {
    return <p>Livro não encontrado.</p>;
  }

  // Renderiza os detalhes do livro
  return (
    <div className="container">

        <br />
        <Link to="/books"><Button variant="contained">Voltar</Button></Link> {/* renderiza  o botão de voltar */}
        <br />

      {/* Renderiza as info do livro*/}
      <div className="containerBook" style={{marginTop:'0'}}>
        <li>
          <h2>{book.volumeInfo.title}</h2>

          <div className="label">
            <p style={{ marginRight: '1vh' }}>Autor:</p>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
          </div>

          <div className="label">
            <p style={{ marginRight: '1vh' }}>Categoria:</p>
            <p>{book.volumeInfo.categories?.join(", ")}</p>
          </div>

          <div className="label">
            <p style={{ marginRight: '1vh' }}>Editora:</p>
            <p>{book.volumeInfo.publisher}</p>
          </div>

          <div className="label">
            <p style={{ marginRight: '1vh' }}>Publicação:</p>
            <p>{book.volumeInfo.publishedDate}</p>
          </div>

          <br />
          <div>
            <p>{book.volumeInfo.description}</p>
          </div>
          <br />

          {book.volumeInfo.imageLinks && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          )}
        </li>
      </div>
    </div>
  );
}
