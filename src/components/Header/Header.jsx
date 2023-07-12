import HeaderStyled from "./styled.jsx";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
      <HeaderStyled>
          <Link to="/">
      <h2>Cadastro de Alunos</h2>
      </Link>
      
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/alunos">Cadastro de Alunos</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
