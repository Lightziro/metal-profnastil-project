import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./Main/Main";
import ProductsList from "./ProductsList/ProductsList";
import Cart from "./Cart/Cart";
import Navigator from "./Navigator/Navigator";
import Footer from "./Footer/Footer";
import ContactPage from "./Contact/ContactPage";

export default function Pages() {

    return (
        <BrowserRouter>
            <Navigator></Navigator>
            <Switch>
                <Route path={'/'} exact component={Main}/>
                <Route path={'/ProductsList'} exact component={ProductsList}/>
                <Route path={'/Cart'} exact component={Cart}/>
                <Route path={'/Contact'} exact component={ContactPage}/>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}
