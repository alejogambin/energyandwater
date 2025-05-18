// Importa React y los componentes necesarios de Material UI para el acordeón
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Importa los datos de preguntas frecuentes desde un archivo JSON
import dataPreguntas from '../Json/dataPreguntas.json';

// Componente funcional que muestra la lista de preguntas frecuentes en formato acordeón
export default function AccordionUsage() {
  return (
    <>
      {/* Título principal de la sección de preguntas frecuentes */}
      <Typography variant="h4" component="h2" sx={{ textAlign: "center", marginTop: '5rem', marginBottom: '2rem' }}>
        <strong>Preguntas Frecuentes</strong>
      </Typography>
      {/* Contenedor de los acordeones, centrado y con ancho fijo */}
      <div style={{ width: '50%', margin: '0 auto', minHeight: '58vh' }}>
        {/* Recorre cada pregunta del JSON y crea un acordeón para cada una */}
        {dataPreguntas.map((item, idx) => (
          <Accordion key={item.id} sx={{ marginTop: idx === 0 ? 0 : '2rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              {/* Muestra la pregunta como título del acordeón */}
              <Typography component="span">{item.pregunta}</Typography>
            </AccordionSummary>
            {/* Muestra la respuesta al expandir el acordeón */}
            <AccordionDetails>
              {item.respuesta}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}