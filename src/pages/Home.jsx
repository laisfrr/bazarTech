import { Card } from 'react-bootstrap'
import Banner from './../components/Banner'
import Galeria from '../components/Galeria'
import Rodape from '../components/Rodape'

function Home() {
  return (
    <main className="container-home">
      <Card className="border-0">
        <Banner />
        <Galeria />
      </Card>
    </main>
  )
}

export default Home
