import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import Fade from 'react-reveal/Fade';


const Products = ({ products, onAddToCart, refProduct }) => {
    const classes = useStyles();

    return (
        <main id="products" className={classes.content} ref={refProduct}>
            <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4}>
                    { products.map((product, index) => (
                        <Grid item key={`${product.id}-item-${index}`} xs={12} sm={6} md={4} lg={3}>
                            <Fade left delay={500 * index}>
                                <Product product={product} onAddToCart={onAddToCart} />
                            </Fade>
                        </Grid>
                    )) }
                </Grid>
        </main>
    )
}

export default Products
