import React, { useEffect } from 'react';
import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Bar from './Bar'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link as RLink } from "react-router-dom"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Joyeria Aura
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  table: {
    minWidth: 650,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


function createData(producto, precio, id) {
  return { producto, precio, id };
}

const rows = [
  createData('Collar 1', 400, "1"),
  createData('collar 2', 237, "2")
];

export default function Pricing(props) {
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("");
  var usuario = ""
  usuario = props.location.usuario
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
    console.log(cart)
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((p) => p !== product));
  }

  const renderCart = () => (
    < Container >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Borrar del carrito</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">${row.price}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" onClick={() => removeFromCart(row)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Total
                            </TableCell>
            <TableCell align="right">${totalSum()}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <RLink to={{
        pathname: "/checkout",
        cart: cart // your data array of objects
      }}>
        <Button variant="contained" color="primary">Checkout</Button>
      </RLink>
    </Container >
  );

  const renderProducts = () => (
    <>
      {/* Hero unit */}
      < Container maxWidth="sm" component="main" className={classes.heroContent} >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Productos
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Aura somos un negocio que vende joyería de acero inoxidable.
          Luce increíble con nuestra joyería.
          Joyería para tí
        </Typography>
      </Container >
      {/* End hero unit */}
      < Container maxWidth="md" component="main" >
        <Grid container spacing={5} alignItems="flex-end">
          {products.map((product) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={product.title} xs={12} sm={product.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={product.name}
                  subheader={product.desc}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={product.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title="image"
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${product.price}
                    </Typography>
                  </div>

                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" color="primary" onClick={() => addToCart(product)}>
                    Agregar al Carrito
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container >
    </>
  );

  const navigateTo = (page) => {
    setPage(page);
  }

  const totalSum = () => {
    var total = 0.0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price
    }
    return total;
  }

  const getUser = async () => {
    console.log("inside")
    const response = await fetch("/products");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  const renderLogin = () => {
    return (
      <Button href="/login" color="primary" variant="outlined" className={classes.link}>
        Login
      </Button>)
  }

  const renderLoggedIn = () => {
    return (
      <Typography component="h2" variant="h6">
        {usuario}
      </Typography>
    )
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
            Joyeria Aura
                </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => navigateTo("products")}>
              Productos
                    </Link>
            <Link variant="button" color="textPrimary" href="/Contacto" className={classes.link}>
              Contacto
                    </Link>
            <IconButton aria-label="cart" onClick={() => navigateTo("cart")}>
              <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </nav>
          {user === "" ? renderLogin() : renderLoggedIn()}
        </Toolbar>
      </AppBar>
      { page === 'products' && renderProducts()}
      {page === 'cart' && renderCart()}
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}