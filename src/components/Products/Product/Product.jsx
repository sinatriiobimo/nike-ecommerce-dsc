import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart, Ballot } from '@material-ui/icons';
import useStyles from './style';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent className={classes.cardContent}>
                        <Typography className={classes.typography} variant="subtitle1">{product.name}</Typography>
                        <Typography className={classes.typography} dangerouslySetInnerHTML={{ __html: product.description }} variant="subtitle1" color="textSecondary"/>
                        <Typography className={classes.typography} variant="body1">{product.price.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Detail Information">
                        <Ballot/>
                    </IconButton>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
    )
}


export default Product
