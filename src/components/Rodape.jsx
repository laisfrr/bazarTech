import { Image, Nav, Navbar } from 'react-bootstrap'
function Rodape() {
  return (
    <footer>
      <Navbar className="container-navbar d-flex ">
        <Navbar.Collapse className="align-items-center justify-content-around gap-4 flex-wrap text-center contain-nav-collapse">
          <Nav.Item className="d-flex flex-column">
            <Navbar.Text>Mídias Sociais</Navbar.Text>
            <Nav.Item className="d-flex justify-content-center gap-4">
              <Nav.Link href="www.whatsapp.com">
                <Image src="/whatsapp.svg" />
              </Nav.Link>
              <Nav.Link href="www.instagram.com">
                <Image src="/instagram.svg" />
              </Nav.Link>
              <Nav.Link href="www.x.com">
                <Image src="/twitter-x.svg" />
              </Nav.Link>
            </Nav.Item>
          </Nav.Item>
          <Nav.Item>
            <Navbar.Text className="flex-wrap">
              ©2024-2025 BazarTech. Todos os diretiros reservados
            </Navbar.Text>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Navbar.Text>Contato</Navbar.Text>
            <Nav.Link href="mailto:bazartech@email.com">
              bazartech@email.com
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  )
}

export default Rodape
