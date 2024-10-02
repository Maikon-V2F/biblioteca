import { BrowserRouter, Routes, Route } from "react-router-dom"; //importa  BrowserRouter, Routes, Route do  react-router-dom

// Importa componentes para as rotas
import NavBar from "../pages/NavBar";
import Home from "../pages/Home";
import BookSearch from "../pages/BookSearch";
import BookDetails from "../pages/BookDetails";
import LogIn from "../Private/LogIn";
import SignUp from "../Private/SignUp";
import LogOut from "../Private/LogOut";
 
// Logica para rota privada
import PrivateRoute from "../Private/PrivateRoute";

// Funcao principal
export default function IndexRoutes() {
  return (

    // Gerencia as rotas
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />

        {/* Rota privada */}
        <Route element={<PrivateRoute />}>
          <Route path="/books" element={<BookSearch />} />
          <Route path="/details/:bookId" element={<BookDetails />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}