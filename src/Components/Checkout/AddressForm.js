import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(props) {
  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [estado, setEstado] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");

  const handleChange = (event) => {
    if (event.target.id === 'address1')
      setCalle(event.target.value);
    else if (event.target.id === 'colonia')
      setColonia(event.target.value);
    else if (event.target.id === 'city')
      setCiudad(event.target.value)
    else if (event.target.id === 'state')
      setEstado(event.target.value)
    else if (event.target.id === 'zip')
      setCodigoPostal(event.target.value)

    props.sendData(getAddress())
  }


  function getAddress() {
    return (calle + ' ' + colonia + ' ' + ciudad + ' ' + estado + ' ' + codigoPostal)
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Direccion de Envio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Calle y numero"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="colonia"
            name="address1"
            label="Colonia"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Estado" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Codigo Postal"
            fullWidth
            onChange={handleChange}
            autoComplete="shipping postal-code"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
