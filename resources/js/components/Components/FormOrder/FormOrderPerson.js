import React from "react";
import {Box} from "@material-ui/core";
import TypoGraphyAlign from "../TypographyAlign/TypoGraphyAlign";
import NameField from "../../HandlerField/NameField/NameField";
import PhoneInputMask from "../../Mask/PhoneInputMask/PhoneInputMask";
import EmailField from "../../HandlerField/EmailField/EmailField";
import DescriptionField from "../../HandlerField/DescriptionField/DescriptionField";
import ButtonSubmitOrder from "./ButtonSubmitOrder";
import {clearProductsCart} from "../../../redux/actions/cart";
import store from "../../../redux/store";
import {successOrder} from "../../Pages/Cart/Constants";
import {errorAlert} from "../../../default/alert";
import {connect} from "react-redux";
import {checkData} from "../../../default/check";

function FormOrderPerson(props) {
    const [dataUser, setDataUser] = React.useState({
        fullName: '',
        phone: '',
        email: '',
        description: '',
    })
    const changeDataHandler = (event, obData) => {
        if (obData) {
            setDataUser({...dataUser, ...obData});
            return;
        }
        setDataUser(prev => ({...prev, ...{[event.target.name]: event.target.value}}));
    }

    const submitFormHandler = () => {
        if (!checkData(dataUser)) {
            props.setAlert(errorAlert('Данные заполнены не корректно, попробуйте снова'));
            return;
        }
        const formData = { dataClient: dataUser, orderProduct: props.cartProducts }
        axios.post('/api/order/person/new', formData).then(response => {
            if (response.data.status === 'success') {
                props.setAlert(successOrder);
                store.dispatch(clearProductsCart());
            }
        })
    }
    return (
        <Box pl={2} pr={2} mb={3}>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='ФИО заказчика'/>
                <NameField value={{get: dataUser.fullName, set: changeDataHandler}} name='cart'></NameField>
            </div>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Телефон для связи'/>
                <PhoneInputMask value={{get: dataUser.phone, set: changeDataHandler}} classSelect='cart-react-dadata__input'/>
            </div>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Email почта'/>
                <EmailField value={{get: dataUser.email, set: changeDataHandler}} classList='cart-react-dadata__input'/>
            </div>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Дополнительное описание'/>
                <DescriptionField value={{get: dataUser.description, set: changeDataHandler}}/>
            </div>
            <ButtonSubmitOrder eventSubmit={submitFormHandler}/>
        </Box>
    )
}
const mapStateToProps = store => ({
    cartProducts: store.cart
})
export default connect(mapStateToProps)(FormOrderPerson)
