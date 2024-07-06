import Card from './Card'
import './Galeria.css'

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
    nome: 'Placa de Vídeo RTX 4060 O8G V2 Gaming ATS ASUS NVIDIA GeForce',
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
      <Card
        key={produto.id}
        nome={produto.nome}
        imagem={produto.imagem}
        desconto={produto.desconto}
        preco={produto.preco}
      />
    )
  })
  return (
    <section className="galeria-container">
      <h2 className="galeria-titulo">Produtos</h2>
      <div className="galeria-separador"></div>
      <article className="galeria-cards">{listarCards}</article>
      <div className="galeria-separador"></div>
    </section>
  )
}

export default Galeria
