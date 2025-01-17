import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
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
    }
}));

export default function Bar() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
                    Joyeria Aura
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="/" className={classes.link}>
                        Productos
                    </Link>
                    <Link variant="button" color="textPrimary" href="/cart" className={classes.link}>
                        Carrito
                    </Link>
                    <Link variant="button" color="textPrimary" href="/Contacto" className={classes.link}>
                        Contacto
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}
