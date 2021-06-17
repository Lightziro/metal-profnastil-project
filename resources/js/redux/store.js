import {combineReducers, createStore} from "redux";
import {cartReducer} from "./reducers/cartReducer";

// const rootReducer = combineReducers({cartReducer, alertReducer});
const store = createStore(cartReducer);
export default store;
