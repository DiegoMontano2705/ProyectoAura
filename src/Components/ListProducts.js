import React, { useEffect } from 'react';
import { useState } from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import AddProduct from "./AddProduct";


var name = "";
var description = "";
var price = "";
var inventory = "";
var image = "";
var id = 4;
const getName = (n) =>{
  name = n;
  console.log(name)
}

const getDescription = (d) => {
  description = d;
  console.log(description)
}

const getPrice = (p) => {
  price = p;
}

const getInventory = (i) => {
  inventory = i;
}

const getImage = (i) => {
  image = i;
  console.log(image)
}

// Generate Order Data
function createData(id, producto, descripcion, precio, inventario, imagen) {
  return { id, producto, descripcion, precio, inventario, imagen };
}

const rows = [
  createData(0, 'collar perlas', 'collar con perlas', '$200', '10', 'https://drive.google.com/file/d/1wgx2DWzKx57V2c5kYhso2P2_YFQGgbSn/view?usp=sharing'),
  createData(1, 'collar perlas', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 'as'),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', '100.81'),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', '654.39'),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', '212.79'),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  const [seccionAgegar, setSeccionAgregar] = useState(false);

  const getProducts = async () => {
    const response = await fetch("/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);


  const addProduct = () => {
    id++
    let product = createData(id, name, description, price, inventory, image)
    setProducts([...products, {...product}])
    setSeccionAgregar(!seccionAgegar)
  }

  const removeProduct = (product) => {
    setProducts(products.filter((p) => p !== product))
  }

  const agregarUnhidden = () => {
    setSeccionAgregar(!seccionAgegar)
  }
  
  return (
    <React.Fragment>
      <Title>Lista de Productos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Inventario</TableCell>
            <TableCell>Imagen</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.inventario}</TableCell>
              <TableCell>{row.image}</TableCell>
              <TableCell align="right"><button class="btn btnRound"><i class="fa fa-trash"></i></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div >
        <button className="btnMas btnRound" onClick={agregarUnhidden}>+</button>
      </div>
      {seccionAgegar? <AddProduct name={getName} desc={getDescription} price={getPrice} inv={getInventory} img={getImage} submitProduct={addProduct} /> : null}
    </React.Fragment>
  );
}