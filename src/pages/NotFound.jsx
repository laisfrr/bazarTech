import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="contain-notfound">
      <Card className="contain-img-notfound">
        <Card.Text className=" texto-not">Página Não Encontrada!</Card.Text>
        <Card.Img src="/notfound.png" className="img-notfound" />
        <Card.Footer className="border-0 bg-white">
          <Card.Text className=" texto-credits">
            Não foi possível encontrar o que você procurou. Tente pesquisar
            novamente.
          </Card.Text>
          <Card.Text className="text-center texto-credits">
            Voltar para a{' '}
            <Link to="/" className=" text-decoration-none text-dark fw-medium">
              Home
            </Link>
          </Card.Text>
        </Card.Footer>
      </Card>
    </main>
  )
}

export default NotFound
