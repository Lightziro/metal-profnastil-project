import React from 'react';
import './style.css';
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {clientList} from "./Constants";

export default function ClientListMainPage(props) {
    return (
        <Box mt={1}>
            <Typography variant={'h2'} align={"center"}>Наши клиенты</Typography>
            <Grid container direction='row' justify='center' alignItems='center'>
                {clientList.map((object, index) => {
                    return <img key={index}
                                src={object.img}
                                className="logo-client-img"
                                title={object.name}
                    />
                })}
            </Grid>
            <Divider/>
        </Box>
    );
}
