import React, {useContext} from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@material-ui/core";
import './style.css';
import {NavLink} from "react-router-dom";

export default function Product(props) {

    return (<Card className='card-product'>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                width="140"
                image={`/image/picture/products/${props.imagePath}`}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Размер: общая - {props.prof_list.type_list.generalWidth}, рабочая
                    - {props.prof_list.type_list.workWidth}.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Толщина: {props.prof_list.thickness} мм.
                </Typography>
                <Grid container direction='row' justify='flex-start' alignItems='center'>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Цвет: RAL
                        - {props.prof_list.ralColorIndex}, {props.prof_list.ralColorName} .
                    </Typography>
                    <Box className='color-product'
                         style={{backgroundColor: props.prof_list.ralColorHtml}}></Box>
                </Grid>
                <Typography variant="body2" color="textSecondary" component="p">
                    Цена: {props.price} руб.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {
                !props.inCart(props.id)
                    ? (<Button size="small" color="primary" onClick={() => props.addProduct(props.id, 1)}>
                        В корзину
                    </Button>)
                    : <Button size="small" color="primary" onClick={() => props.updateCount(props.id, 1)}>
                        Добавить +1 в корзину
                    </Button>
            }
        </CardActions>
    </Card>)
}
