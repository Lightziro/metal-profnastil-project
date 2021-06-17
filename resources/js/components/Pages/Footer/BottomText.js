import React from "react";
import {Grid, Typography} from "@material-ui/core";

export default function BottomText() {
    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            <Typography align={"center"}>© ООО ПКП "Автосвет" 2020-2021. Все права защищены</Typography>
            <Typography align={"center"}>
                Юридический адрес: 610006, Кировская область, город Киров, Больничный проезд, 9
            </Typography>
            <Typography align={"center"}>
                Указанная стоимость товара и условия их приобретения действительны по состоянию на текущую дату.
            </Typography>
        </Grid>
    )
}
