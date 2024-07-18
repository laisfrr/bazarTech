// import './Galeria.css'
import CardProdutos from './CardProduct.jsx'
import Card from 'react-bootstrap/Card'

const produtos = [
  {
    id: 1,
    nome: 'Teclado sem fio Logitech MX Keys Mini com Iluminação Inteligente',
    imagem: '/teclado.jpg',
    desconto: 10,
    preco: 500
  },
  {
    id: 2,
    nome: 'Placa de Vídeo RTX 4060 O8G V2 Gaming ATS ASUS GeForce ...',
    imagem: '/placa-video.jpg',
    desconto: 10,
    preco: 1500.99
  },
  {
    id: 3,
    nome: 'Headset Gamer Sem Fio Corsair HS55, 7.1 Surround',
    imagem: '/fone.jpg',
    desconto: 10,
    preco: 300.99
  },
  {
    id: 4,
    nome: 'Webcam Full HD Logitech C920s com Microfone Embutido',
    imagem: '/webcam.jpg',
    desconto: 10,
    preco: 350.9
  }
]
function Galeria(props) {
  const listarCards = produtos.map(produto => {
    return (
      <CardProdutos
        key={produto.id}
        nome={produto.nome}
        imagem={produto.imagem}
        desconto={produto.desconto}
        preco={produto.preco}
      />
    )
  })
  return (
    <main className="container-galeria">
      <Card className="card-galeria align-items-center border-0 p-0 ">
        <Card.Header className="border-0 bg-white">
          <Card.Title as="h3" className="d-flex galeria-titulo">
            Produtos
          </Card.Title>
        </Card.Header>
        <Card.Body className="d-flex align-items-center gap-5 flex-wrap body-card">
          {listarCards}
        </Card.Body>
      </Card>
    </main>
  )
}

export default Galeria
