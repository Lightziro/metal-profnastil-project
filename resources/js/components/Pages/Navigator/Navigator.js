import React from "react";
import './style.css'
import {Box, Container, Grid} from "@material-ui/core";
import {navItem} from "./Constants";
import NavItem from "./NavItem";

export default function Navigator(props) {
    return (
        <Container>
            <Box mb={3}>
                <Grid container direction='row' alignItems='center' justify='center'>
                    {navItem.map((object, index) => {
                        return (<NavItem {...object} key={index}/>)
                    })}
                </Grid>
            </Box>
        </Container>
    );
}
