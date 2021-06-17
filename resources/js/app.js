import React from "react";
import {render} from 'react-dom';
import Pages from "./components/Pages/Pages";
import {Provider} from "react-redux";
import store from "./redux/store";

require('./bootstrap');
if (document.getElementById('user')) {
    render(<Provider store={store}>
        <Pages></Pages>
    </Provider>, document.getElementById('user'));
}
