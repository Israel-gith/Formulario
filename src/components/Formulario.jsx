import React, { useState } from 'react';
import {
  Button, Typography, Box, Paper,Grid, TextField, Container,
  InputLabel, MenuItem, FormControl, Select, Divider, Rating,
  Checkbox, FormLabel, Radio, RadioGroup, FormControlLabel,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material';

function Formulario() {
  const [data, setData] = useState({
    nombre: '',
    apellidos: '',
    edad: '',
    genero: '',
    lenguaje: '',
    rating: 0,
    termsAccepted: false,
  });

  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  const handleClear = () => {
    setData({
      nombre: '',
      apellidos: '',
      edad: '',
      genero:'',
      lenguaje: '',
      rating: 0,
      termsAccepted: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container>
      <Paper>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={4.75}>
              <TextField
                required
                label='Nombre'
                name='nombre'
                variant='outlined'
                fullWidth
                value={data.nombre}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4.75}>
              <TextField
                required
                label='Apellidos'
                name='apellidos'
                variant='outlined'
                fullWidth
                value={data.apellidos}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={2.5}>
              <TextField
                required
                label='Edad'
                name='edad'
                type='number'
                variant='outlined'
                fullWidth
                value={data.edad}
                onChange={handleChange}
              />
            </Grid>

          </Grid>

          <br />

     <Grid>
      <FormControl 
        sx={{ 
          width: { xs: '100%', md: '38%' },
          marginLeft: { xs: '15%', md: '2%' },
          size: 'small',
          alignContent: 'center'
        }} 
        component="fieldset"
      >
        <FormLabel sx={{textAlign: 'left', marginLeft: 15}}  >Género</FormLabel>
        <RadioGroup
                  row
                  name='genero'
                  value={data.genero}
                  onChange={handleChange}
                >
          <FormControlLabel value="Femenino" control={<Radio size='small' required/>}  label="Femenino" />
          <FormControlLabel value="Masculino" control={<Radio size='small'/>}  label="Masculino" />
          <FormControlLabel value="Otro" control={<Radio size='small'/>} label="Otro" />
        </RadioGroup>
      </FormControl>

      <FormControl 
  sx={{ 
    width: { xs: '100%', md: '60%' },
  }}
>
  <InputLabel>Lenguaje de programación favorito</InputLabel>
  <Select
    name="lenguaje"  
    value={data.lenguaje}
    label="Lenguaje de programación favorito"
    onChange={handleChange}
    required
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value="Java">Java</MenuItem>
    <MenuItem value="Python">Python</MenuItem>
    <MenuItem value="C++">C++</MenuItem>
  </Select>
</FormControl>

  </Grid>

          <br />
          <Divider />
          <br />

          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Typography>Puntúa esta encuesta</Typography>
            </Grid>
            <Grid item>
              <Rating
                name='rating'
                value={data.rating}
                onChange={(event, newValue) => setData({ ...data, rating: newValue })}
              />
            </Grid>
          </Grid>

          <br />

          <Grid container spacing={2}>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name="termsAccepted"
                    checked={data.termsAccepted}
                    onChange={handleChange}
                  />
                }
                label="He leído los términos y condiciones"
              />
            </Grid>
          </Grid>

          <br />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                disabled={!data.termsAccepted}
              >
                Enviar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={handleClear}
                variant='outlined'
                color='secondary'
                fullWidth
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Confirmación</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿Quieres enviar el formulario con los datos proporcionados?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">No</Button>
            <Button onClick={() => {
              console.log(data);
              handleDialogClose();
            }} color="primary" autoFocus>
              Sí
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Container>
  );
}

export default Formulario;