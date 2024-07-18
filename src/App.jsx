import Menu from './components/Menu'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Contato from './pages/Contato'
import Rodape from './components/Rodape'
import { Toaster } from 'react-hot-toast'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
      <Toaster position="top-right" />
    </>
  )
}

export default App
