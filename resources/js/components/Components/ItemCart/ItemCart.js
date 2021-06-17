import store from "../../../redux/store";
import {removeProductCart} from "../../../redux/actions/cart";
import {Box, Button, Card, CardContent, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import './style.css';


export default function ItemCartCard(props) {

    const removeProduct = () => {
        store.dispatch(removeProductCart(props.id));
    }

    return (
        <Box m={2}>
            <Card className='card-flex'>
                <CardContent className='card-content'>
                    <Typography component="h5" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Цвет: {props.prof_list.ralColorName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Количество: {props.selectCount} шт.
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Цена за {props.selectCount} товаров: {(props.selectCount * props.price).toFixed(2)} руб.
                    </Typography>
                    <Button onClick={removeProduct} size="small" color="primary">
                        Удалить
                    </Button>
                </CardContent>
                <img src={`/image/picture/products/${props.imagePath}`}
                     alt='Фотография товара'
                     className='product-img'
                     height={180}
                />
            </Card>
        </Box>
    );
}
