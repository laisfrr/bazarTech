import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Menu() {
  return (
    <header>
      <Navbar bg="ligth" className="d-flex border-bottom" expand="md">
        <Container fluid>
          <Link className="" to="/">
            <img src="./logo-bazar.svg" width={30} alt="logo bazartech" />
          </Link>
          <Navbar.Brand className="d-flex mx-3">
            <Link to="/" className="nome-logo text-decoration-none">
              BazarTech
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="text-center justify-content-end">
            <Nav className="fw-bold">
              <Link className="nav-link link-nav" to="/login">
                Login
              </Link>
              <Link className="nav-link link-nav" to="/cadastro">
                Cadastro
              </Link>
              <Link className="nav-link link-nav" to="/contato">
                Contato
              </Link>
              <Link className="nav-link link-nav" to="/">
                <img src="/shopp.svg" alt="logo bazartech" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu
