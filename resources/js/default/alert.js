export const defaultStateAlert = {
    state: false,
    text: '',
    status: 'success'
}
export const closeAlert = (alertState) => {
    return {...alertState, ...{state: false}}
}
export const successAlert = (text) => {
    return {
        state: true,
        text: text,
        status: 'success'
    }
}
export const errorAlert = (text) => {
    return {
        state: true,
        text: text,
        status: 'error'
    }
}
