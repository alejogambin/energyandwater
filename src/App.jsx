
import './App.css'

//impprtar brouserRouter
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


//importaciones de paginas
import Productos from './pages/Productos'
import Home from './pages/Home'
import Preguntas from './pages/Preguntas'
import Somos from './pages/Somos'
import Contacto from './pages/Contacto'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Home />
          </>
          }
          />

           <Route path='/products' element={
          <>
            <Productos />
          </>
          }
          />

           <Route path='/contacto' element={
          <>
            <Contacto />
          </>
          }
          />

          <Route path='/nosotros' element={
          <>
            <Somos />  
          </>
          }
          />

         <Route path='/preguntas' element={
          <>
            <Preguntas />
          </>
          }
          />

      </Routes>
    </Router>
 
  )
};

export default App
