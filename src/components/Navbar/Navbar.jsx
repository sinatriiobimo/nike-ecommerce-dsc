import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Fade from 'react-reveal/Fade';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './style';
import logo from '../../assets/logo.png';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();


    return (
        <>
                <AppBar position="fixed" className={classes.appBar} color="inherit">
                    <Fade big>
                            <Toolbar>
                                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                                    <img src={logo} alt="Nike" height="25px" className={classes.image}/>
                                </Typography>
                                <div className={classes.grow}/>
                                {location.pathname === '/' && (
                                    <div className={classes.button}>
                                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                            <Badge badgeContent={totalItems} color="error">
                                                <ShoppingCart />
                                            </Badge>
                                        </IconButton>
                                    </div>
                                )}
                            </Toolbar>
                    </Fade> 
                </AppBar>  
        </>
    )
}

export default Navbar
