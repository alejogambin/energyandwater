import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dataPreguntas from '../Json/dataPreguntas.json';

export default function AccordionUsage() {
  return (
    <>
      <Typography variant="h4" component="h2" sx={{ textAlign: "center", marginTop: '5rem', marginBottom: '2rem' }}>
        <strong>Preguntas Frecuentes</strong>
      </Typography>
      <div style={{ width: '50%', margin: '0 auto', minHeight: '58vh' }}>
        {dataPreguntas.map((item, idx) => (
          <Accordion key={item.id} sx={{ marginTop: idx === 0 ? 0 : '2rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography component="span">{item.pregunta}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.respuesta}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}