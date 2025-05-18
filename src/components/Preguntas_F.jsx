import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function AccordionUsage() {
  return (
<>
    <Typography variant="h4" component="h2" sx={{ textAlign: "center", marginTop: '5rem', marginBottom: '2rem' }}>
      <strong>Preguntas Frecuentes</strong>   
    </Typography>
    <div style={{ width: '50%', margin: '0 auto',minHeight: '58vh' }}>
      <Accordion sx={{ marginTop: '8rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Donde nos Ubicamos</Typography>
        </AccordionSummary>
        <AccordionDetails>
         Avenida Eucaliptus 1809, Zapallar, Valparaiso, Chile
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginTop: '2rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Como Comprar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Enviando un mensaje directo por alguna de nuestras redes sociales.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginTop: '2rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Modo de envio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Los envios se realizan a traves de chilexpress o Starken por pagar.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginTop: '2rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Que dia se hacen los despachos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Los despachos se realizan los dias Jueves.
        </AccordionDetails>
      </Accordion>

    </div>
    </>
  );
}
