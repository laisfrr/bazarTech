import './Card.css'

function Card(props) {
  const promo = props.desconto > 0
  const calcDesconto = props.preco - (props.desconto / 100) * props.preco
  return (
    <article className="container-card">
      <img src={props.imagem} alt={props.nome} />
      <p className="card-titulo">{props.nome}</p>
      {promo && <p className="card-desconto">R$ {props.preco.toFixed(2)}</p>}
      {promo ? (
        <p className="card-preco">
          R$ {calcDesconto.toFixed(2)} <span>À vista</span>
        </p>
      ) : (
        <p className="card-preco">
          R$ {props.preco.toFixed(2)} <span>À vista</span>
        </p>
      )}
      <button className="card-button">COMPRAR</button>
    </article>
  )
}

export default Card
