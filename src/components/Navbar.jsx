import './Navbar.css'

function Navbar(props) {
  const handClick = () => {
    alert('Em manutenção!')
  }
  return (
    <header className="container-header">
      <nav className="header-navbar">
        <img className="img-logo" src="/logo-bazar.svg" alt="" />
        <div className="header-div">
          <ul>
            <a href="#">
              <li>Início</li>
            </a>
            <a href="#">
              <li>Produtos</li>
            </a>
            <a href="#">
              <li>Contatos</li>
            </a>
          </ul>
          {props.logado ? (
            <button onClick={handClick} className="header-log">
              Sair
            </button>
          ) : (
            <button onClick={handClick} className="header-log">
              Entrar
            </button>
          )}
          <div className="header-div2">
            {props.logado && (
              <a href="#">
                <img
                  className="img-user"
                  src="/user.svg"
                  alt="icone do usuário"
                />
              </a>
            )}
            <a href="">
              <img
                className="img-shopp"
                src="/shopp.svg"
                alt="carrinho de compras"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
