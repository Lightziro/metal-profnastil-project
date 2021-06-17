import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

export default function EmptyCart(props) {
    return (
        <Grid container alignItems='center' direction='column' justify='center'>
            <Typography align='center' variant='h3'>Ваша корзина пуста</Typography>
            <img className='cart-empty-image' src='/image/icon/empty-cart.png'/>
            <Typography variant='h6' align='center'>Выбрать и добавить товар в корзину можно в разделе&nbsp;
                <NavLink to='/ProductsList'>"Продукты"</NavLink>
            </Typography>
        </Grid>
    )
}
