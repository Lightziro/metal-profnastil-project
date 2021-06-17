import {Box, Typography} from "@material-ui/core";
import React from "react";

export default function TypoGraphyAlign(props) {

    return (
        <Box width={props.widthBox}>
            <Typography variant={props.var} align={props.align}>{props.text}</Typography>
        </Box>
    );
}
