import React from 'react'
import Product from "../../Components/Product/Product";
import {Container, Box, Grid, Snackbar} from "@material-ui/core";
import PanelSortProduct from "../../Components/PanelSortProduct/PanelSortProduct";
import {connect} from "react-redux";
import store from "../../../redux/store";
import {addProductCart, setProductList, updateCountProductCart} from "../../../redux/actions/cart";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import {Alert} from "@material-ui/lab";
import {closeAlert, defaultStateAlert, successAlert} from "../../../default/alert";

function ProductsList(props) {
    const [alert, setAlert] = React.useState(defaultStateAlert)
    const [load, setLoad] = React.useState(false);
    document.title = 'Продукты компании - Кировский завод металлопрофиля'

    const requestSort = (params) => {
        setLoad(true);
        axios.get(`/api/${params}`)
            .then(response => {
                store.dispatch(setProductList(response.data));
                setLoad(false);
            })
    }
    const addProduct = (id, count) => {
        axios.get(`/api/product/get?id=${id}`)
            .then((response) => {
                const product = response.data;
                store.dispatch(addProductCart(product, count));
            })
        setAlert(successAlert('Вы успешно добавили товар в корзину'))
    }
    const addCountProduct = (id, count) => {
        store.dispatch(updateCountProductCart(id, count));
    }

    React.useEffect(() => {
        requestSort('product/all');
    }, [])

    const inCart = id => {
        const product = props.cart.find(item => item.id === id);
        return (typeof product == 'undefined') ? false : true;
    }

    return (
        <Container>
            <PanelSortProduct changeSortPrice={requestSort}
            ></PanelSortProduct>
            <Box mt={4}>
                <Grid container direction='row' justify='center' alignItems='center'>
                    {
                        load ? <LoadingScreen/> :
                            props.products.map((item, index) => {
                                return <Product {...item}
                                                key={index}
                                                setAlert={setAlert}
                                                inCart={inCart}
                                                addProduct={addProduct}
                                                updateCount={addCountProduct}>
                                </Product>
                            })
                    }
                </Grid>
            </Box>
            <Snackbar open={alert.state} autoHideDuration={3000} onClose={() => setAlert(closeAlert(alert))}>
                <Alert onClose={() => setAlert(closeAlert(alert))} severity={alert.status}>
                    {alert.text}
                </Alert>
            </Snackbar>
        </Container>
    )
}

const mapStateToProps = store => ({
    products: store.productList,
    cart: store.cart
})
export default connect(mapStateToProps)(ProductsList)
