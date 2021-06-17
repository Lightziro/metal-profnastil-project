import {
    ADD_PRODUCT_CART,
    ADD_SELECT_PRODUCT,
    CLEAR_PRODUCTS_CART,
    REMOVE_PRODUCT_CART,
    SET_PRODUCT_LIST, UPDATE_COUNT_PRODUCT_CART
} from "../types/cart";

const defaultState = {
    productList: [],
    cart: JSON.parse(localStorage.getItem('cart')) || []
}

export function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                ...state,
                cart: [...state.cart, action.product]
            }
        case REMOVE_PRODUCT_CART:
            return {...state, cart: state.cart.filter(item => item.id !== action.id)}
        case SET_PRODUCT_LIST:
            return {...state, productList: action.data}
        case CLEAR_PRODUCTS_CART:
            return {...state, cart: []}
        case UPDATE_COUNT_PRODUCT_CART:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.id) {
                        item.selectCount += action.count;
                    }
                    return item;
                })
            }
        default:
            return state
    }
}
