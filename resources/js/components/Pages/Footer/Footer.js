import React from 'react';
import './style.css';
import {Box, Grid, Typography, Divider, Snackbar} from '@material-ui/core';
import BottomText from "./BottomText";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import FormQuestion from "./FormQuestion";
import {Alert} from "@material-ui/lab";
import {closeAlert, defaultAlert} from "./Constants";

export default function Footer(props) {

    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState(defaultAlert);

    const changeLoading = (status) => {
        setLoading(status);
    }

    return (
        <div>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Box className='items-block-footer'>
                    <Typography variant='h6'>Наш офис</Typography>
                    <iframe className='map-yandex'
                            src='https://yandex.ru/map-widget/v1/?um=constructor%3Abd2ef9726fa4732622b14d3ac390272a0f6a0d5ef636e7fd8c206c35b3745b7d&amp;source=constructor'
                            width='914' height='622' frameBorder='0'></iframe>
                </Box>
                <Box width={400}>
                    {
                        !loading
                            ? <FormQuestion alert={{set: setAlert}}
                                            loading={{get: loading, set: changeLoading}}
                            />
                            : <LoadingScreen/>
                    }
                </Box>
            </Grid>
            <Divider/>
            <Box className='footer-private-info'>
                <BottomText/>
            </Box>
            <Snackbar open={alert.state} autoHideDuration={3000} onClose={() => closeAlert(alert, setAlert)}>
                <Alert onClose={() => closeAlert(alert, setAlert)} severity={alert.status}>
                    {alert.text}
                </Alert>
            </Snackbar>
        </div>
    );
}
