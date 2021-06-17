import {
    ADD_PRODUCT_CART,
    CLEAR_PRODUCTS_CART,
    REMOVE_PRODUCT_CART,
    SET_PRODUCT_LIST, UPDATE_COUNT_PRODUCT_CART
} from "../types/cart";

export const addProductCart = (product, count) => {
    product.selectCount = count;
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || []
    cartStorage.push(product);
    localStorage.setItem('cart', JSON.stringify(cartStorage));
    return {
        type: ADD_PRODUCT_CART,
        product
    }
}
export const removeProductCart = id => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return {
        type: REMOVE_PRODUCT_CART,
        id
    }
}
export const setProductList = data => {
    return {
        type: SET_PRODUCT_LIST,
        data
    }
}
export const clearProductsCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    return {
        type: CLEAR_PRODUCTS_CART
    }
}
export const updateCountProductCart = (id, count) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = cart.map(item => {
        if (item.id === id) {
            item.selectCount += count;
        }
        return item;
    })
    localStorage.setItem('cart', JSON.stringify(newCart));
    return {
        type: UPDATE_COUNT_PRODUCT_CART,
        id,
        count
    }
}
