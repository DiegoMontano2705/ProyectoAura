import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    if (event.target.id === 'nombre') {
        setName(event.target.value);
        props.name(getName())
    }
    else if (event.target.id === 'descripcion') {
        setDescription(event.target.value);
        props.desc(getDescription())
    }
    else if (event.target.id === 'precio') {
        setPrice(event.target.value)
        props.price(getPrice())
    }
    else if (event.target.id === 'inventario') {
        setInventory(event.target.value)
        props.inv(getInvetory())
    }
    else if (event.target.id === 'imagen') {
        setImage(event.target.value)
        props.img(getImage())
    }

    
  }

  
  function getName() {
      return (name)
  }

  function getDescription() {
    return (description)
  }

  function getPrice() {
    return (price)
  }

  function getInvetory() {
    return (inventory)
  }

  function getImage() {
    return (image)
  }


  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
        Agregar producto
    </Typography>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre del producto"
            fullWidth
            onChange={handleChange}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="descripcion"
            name="descripcion"
            label="Descripcion del producto"
            fullWidth
            onChange={handleChange}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="precio"
            name="precio"
            label="Precio del producto"
            fullWidth
            onChange={handleChange}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField required id="imagen" name="imagen" label="link de imagen" fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="inventario"
            name="inventario"
            label="Cantidad del producto"
            fullWidth
            onChange={handleChange}
        />
        </Grid>
    </Grid>
    <div>
        <button className="btnAgregar btnRound" onClick={props.submitProduct}>Agregar</button>
    </div>
    </React.Fragment>
    );
}
