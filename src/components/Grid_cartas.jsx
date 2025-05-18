import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tarjeta_Servicio from './Tarjeta_Servicio';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={3}>
          <Item>
            <Tarjeta_Servicio />
          </Item>
        </Grid>
        <Grid size={3}>
          <Item><Tarjeta_Servicio /></Item>
        </Grid>
        <Grid size={3}>
          <Item><Tarjeta_Servicio /></Item>
        </Grid>
        <Grid size={3}>
          <Item><Tarjeta_Servicio /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
