import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sobre from './pages/sobre'
import Experiencia from './pages/Experiencia'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import GestaoAmbiental from "./pages/GestaoAmbiental";

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/gestao-ambiental" element={<GestaoAmbiental />} />
      </Routes>
    </>
  )
}

export default App