import React from "react";
import {Backdrop, CircularProgress, FormControlLabel, Paper, Switch} from "@material-ui/core";
import TypoGraphyAlign from "../TypographyAlign/TypoGraphyAlign";
import './style.css';
import FormOrderPerson from "./FormOrderPerson";
import FormOrderCompany from "./FormOrderCompany";
import {useStyles} from "./Constants";

export function FormOrder(props) {
    const [itsCompany, setItsCompany] = React.useState(false);
    const [load, setLoad] = React.useState(false);
    const classes = useStyles();

    const setCompanyOrder = () => {
        setItsCompany(!itsCompany);
    }
    const setLoadHandler = () => {
        setLoad(!load);
    }

    return (
        <div className='full-block-form'>
            <Paper>
                <TypoGraphyAlign var={'h5'} widthBox='100%' align='center' text='Форма заказа'/>
            </Paper>
            <div className='form-block'>
                <Paper style={{textAlign: 'center'}}>
                    <div className='content-form'>
                        <TypoGraphyAlign var={'body2'} widthBox='100%' align='center' text='Если вы являетесь юридическим лицом,
                            нажмите на кнопку, чтобы открылась форма заказа для компаний'/>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={itsCompany}
                                    onChange={setCompanyOrder}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Юридическое лицо"
                        />
                        {
                            itsCompany
                                ? <FormOrderCompany setLoad={setLoadHandler} {...props}/>
                                : <FormOrderPerson setLoad={setLoadHandler} {...props}/>
                        }
                    </div>
                </Paper>
            </div>
            <Backdrop className={classes.backdrop} open={load}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
