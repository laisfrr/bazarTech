import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Navbar logado={false} />
      <Banner />
      <Galeria />
      <Rodape />
    </>
  )
}

export default App
