// Importa React y los componentes necesarios de Material UI para el acordeón
import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Componente funcional que muestra la lista de preguntas frecuentes en formato acordeón
export default function PreguntasF() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/faq/', {
      headers: { Authorization: 'Bearer ipss.get' }
    })
      .then(res => res.json())
      .then(data => {
        setFaqs(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Título principal de la sección de preguntas frecuentes */}
      <Typography variant="h4" component="h2" sx={{ textAlign: "center", mt: '5rem', mb: '2rem' }}>
        <strong>Preguntas Frecuentes</strong>
      </Typography>
      {/* Contenedor de los acordeones, centrado y con ancho fijo */}
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto', minHeight: '58vh' }}>
        {/* Muestra un mensaje de carga mientras se obtienen los datos */}
        {loading ? (
          <Typography align="center">Cargando...</Typography>
        ) : (
          /* Recorre cada pregunta del estado y crea un acordeón para cada una */
          faqs.map((item, idx) => (
            <Accordion key={item.id} sx={{ mt: idx === 0 ? 0 : 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
              >
                {/* Muestra la pregunta como título del acordeón */}
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    wordBreak: "break-word"
                  }}
                >
                  {item.titulo}
                </Typography>
              </AccordionSummary>
              {/* Muestra la respuesta al expandir el acordeón */}
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                    wordBreak: "break-word"
                  }}
                >
                  {item.respuesta}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </div>
    </>
  );
}