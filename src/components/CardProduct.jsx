import './CardProduct.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CardProdutos(props) {
  const promo = props.desconto > 0
  const calcDesconto = props.preco - (props.desconto / 100) * props.preco
  return (
    <Card className="d-flex align-items-center flex-colum border-0 shadow p-2 contain-card">
      <Card.Img variant="top" className="card-img" src={props.imagem} />
      <Card.Body className="d-flex flex-column justify-content-evenly m-0 p-0 gap-4">
        <Card.Title className="m-0 fs-5 card-title">{props.nome}</Card.Title>
        {promo && (
          <Card.Text className="preco-real">
            R$ {props.preco.toFixed(2)}
          </Card.Text>
        )}
        {promo ? (
          <Card.Text className="card-preco">
            R$ {calcDesconto.toFixed(2)}{' '}
            <small className="card-small">À vista</small>
          </Card.Text>
        ) : (
          <Card.Text className="card-preco">
            R$ {props.preco.toFixed(2)}
            <small className="card-small"> À vista</small>
          </Card.Text>
        )}
        <Button id="botao-comprar" className="border-0 fw-bold">
          COMPRAR
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardProdutos
