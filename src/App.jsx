import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Preguntas from './pages/Preguntas'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/preguntas' element={<Preguntas />} />
      </Routes>
    </Router>
  )
}

export default App
