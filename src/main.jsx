// Importa StrictMode para ayudar a identificar problemas potenciales en la aplicación
import { StrictMode } from 'react'
// Importa createRoot para crear el punto de entrada de la aplicación React
import { createRoot } from 'react-dom/client'
// Importa los estilos globales
import './index.css'
// Importa el componente principal de la aplicación
import App from './App.jsx'

// Renderiza la aplicación en el elemento con id 'root' del HTML
createRoot(document.getElementById('root')).render(
  // StrictMode activa comprobaciones y advertencias adicionales en desarrollo
  <StrictMode>
    <App />
  </StrictMode>,
)
