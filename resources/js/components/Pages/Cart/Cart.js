import React from "react";
import {
    Container,
    Grid, Snackbar,
} from "@material-ui/core";
import '../../TemplateComponent/EmptyCart/style.css';
import {FormOrder} from "../../Components/FormOrder/FormOrder";
import {connect} from "react-redux";
import EmptyCart from "../../TemplateComponent/EmptyCart/EmptyCart";
import ItemCartCard from "../../Components/ItemCart/ItemCart";
import {Alert} from "@material-ui/lab";
import {closeAlert, defaultStateAlert} from "../../../default/alert";


function Cart(props) {
    document.title = 'Корзина товаров - Кировский завод металлопрофиля'
    const [alert, setAlert] = React.useState(defaultStateAlert)
    return (
        <Container fixed>
            <Grid container spacing={3} justify='center'>
                {
                    !props.cartProducts.length
                        ? <EmptyCart/>
                        : (<>
                            <Grid item>
                                {
                                    props.cartProducts ? (props.cartProducts.map((item, index) => {
                                        return (<ItemCartCard {...item} key={index}/>)
                                    })) : <EmptyCart/>
                                }
                            </Grid>
                            <Grid item>
                                <FormOrder setAlert={setAlert}/>
                            </Grid>
                        </>)
                }
            </Grid>
            <Snackbar open={alert.state} autoHideDuration={3000} onClose={() => setAlert(closeAlert(alert))}>
                <Alert onClose={() => setAlert(closeAlert(alert))} severity={alert.status}>
                    {alert.text}
                </Alert>
            </Snackbar>
        </Container>
    );
}

const mapStateToProps = store => ({
    cartProducts: store.cart
})
export default connect(mapStateToProps)(Cart)
