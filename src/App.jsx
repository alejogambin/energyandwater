import './App.css'

// Importa los componentes necesarios de react-router-dom para el enrutamiento
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Importa las páginas/componentes que se mostrarán según la ruta
import Productos from './pages/Productos'
import Home from './pages/Home'
import Preguntas from './pages/Preguntas'
import Somos from './pages/Somos'
import Contacto from './pages/Contacto'

// Componente principal de la aplicación
function App() {

  return (
    // Envuelve toda la aplicación en el Router para habilitar el enrutamiento
    <Router>
      {/* Define las rutas de la aplicación */}
      <Routes>
        {/* Ruta principal que muestra el componente Home */}
        <Route path='/' element={
          <>
            <Home />
          </>
          }
        />

        {/* Ruta para la página de productos */}
        <Route path='/products' element={
          <>
            <Productos />
          </>
          }
        />

        {/* Ruta para la página de contacto */}
        <Route path='/contacto' element={
          <>
            <Contacto />
          </>
          }
        />

        {/* Ruta para la página "nosotros" */}
        <Route path='/nosotros' element={
          <>
            <Somos />  
          </>
          }
        />

        {/* Ruta para la página de preguntas frecuentes */}
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

// Exporta el componente App para ser usado en otros archivos
export default App
