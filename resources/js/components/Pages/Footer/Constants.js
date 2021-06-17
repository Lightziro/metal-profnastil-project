export const defaultForm = {
    fullName: '',
    phone: '',
    email: '',
    description: '',
}
export const defaultAlert = {
    state: false,
    text: '',
    status: ''
}
// export const successAlert = {
//     state: true,
//     text: 'Ваш вопрос успешно передан, скоро с вами свяжется Менеджер',
//     status: 'success',
// }
// export const errorAlert = {
//     state: true,
//     text: 'Произошла ошибка при отправке запроса, попробуйте ещё раз',
//     status: 'error',
// }
export const closeAlert = (alert, setAlert) => {
    setAlert({...alert, ...{state: false}});
}
