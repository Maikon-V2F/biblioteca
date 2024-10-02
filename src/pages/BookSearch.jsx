import React, { useEffect, useState } from "react"; // importa React
import axios from "axios"; // importa axios para lidar com requisições da API
import { API_URL, API_KEY } from "../api"; // importa as variáveis de ambiente
import { Link } from "react-router-dom"; // importa Link do react-router-dom

import "../styles/BookSearch.css"; // importa o CSS
import Button from '@mui/material/Button'; // importa botao do  material-ui
import TextField from "@mui/material/TextField"; // importa input do material-ui

// Função principal
export default function BookSearch() {
  // Inicializa os estados dos livros e valor da busca
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState(""); // define a busca inicial

  // Define a quantidade máxima de livros a ser renderizada
  const maxResults = 5;

  // Atualiza o estado da busca quando o input for alterado
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  // Busca os livros da API com axios, try tenta pegar os dados, catch caso haja erro
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?q=${search}&maxResults=${maxResults}&key=${API_KEY}`
      );
      setBooks(response.data.items || []); // Se não houver livros, define um array vazio
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  // Busca livros ao carregar a página
  useEffect(() => {
    fetchBooks();
  }, []); // array vazio para ser executado apenas uma vez

  // Busca livros ao digitar no campo de busca
  useEffect(() => {
    if (search) {
      // Verifica se há um valor de busca antes de buscar
      fetchBooks();
    }
  }, [search]); // Chama a função fetchBooks toda vez que a busca for alterada

  // Retorna o que vai ser renderizado em tela
  return (
    <div className="container">
      <h1>Lista de Livros</h1>
      <br />
      {/* Input para buscar livros */}
      <TextField
        id="filled-basic"
        label="Pesquisa"
        variant="filled"
        type="text"
        value={search}
        onChange={handleSearch}
        required
      />{" "}
      <br />
      {/* input ao ser alterado chama a função handleSearch */}
      <div className="listbooks">
        <ul>
          {/* Mapeia os dados pegados da API e retorna uma li para cada item, com o título e imagem da capa */}
          {books.length > 0 ? (
            books.map((book) => (
              <li key={book.id} className="containerBook">
                <h2>{book.volumeInfo.title}</h2>
                {book.volumeInfo.imageLinks && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                )}
                <br />       

                {/* Renderiza link para detalhes do livro passando id como parametro */} 
                <Link to={`/details/${book.id}`}>
                <Button variant="contained">Ver detalhes</Button>
                </Link>
                <br />
                <br />
              </li>
            ))
          ) : (
            <p>Nenhum livro encontrado.</p> 
          )}
        </ul>
      </div>
    </div>
  );
}
