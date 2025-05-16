import './App.css'

//impprtar brouserRouter
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


//importaciones de paginas
import Productos from './pages/Productos'
import Home from './pages/Home'

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
      </Routes>
    </Router>
 
  );
}

export default App
