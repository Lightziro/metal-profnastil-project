import React from "react";
import {Box} from "@material-ui/core";
import CompanyField from "../../HandlerField/CompanyField/CompanyField";
import TypoGraphyAlign from "../TypographyAlign/TypoGraphyAlign";
import NameField from "../../HandlerField/NameField/NameField";
import './style.css';
import PhoneInputMask from "../../Mask/PhoneInputMask/PhoneInputMask";
import DescriptionField from "../../HandlerField/DescriptionField/DescriptionField";
import ButtonSubmitOrder from "./ButtonSubmitOrder";
import store from "../../../redux/store";
import {clearProductsCart} from "../../../redux/actions/cart";
import {errorAlert, successAlert} from "../../../default/alert";
import {connect} from "react-redux";
import {checkData} from "../../../default/check";

function FormOrderCompany(props) {
    const [dataCompany, setDataCompany] = React.useState({
        company: '',
        fullName: '',
        phone: '',
        description: '',
    })
    const submitFormHandler = () => {
        if (!checkData(dataCompany)) {
            props.setAlert(errorAlert('Данные заполнены не корректно, укажите верные данные'));
            return;
        }
        const formData = { dataClient: dataCompany, orderProduct: props.cartProducts }
        props.setLoad();
        axios.post('/api/order/person/new', formData).then(response => {
            if (response.data.status === 'success') {
                props.setLoad();
                props.setAlert(successAlert('Вы успешно оформили заказ, в ближайшее время с Вами свяжется Менеджер'));
                store.dispatch(clearProductsCart());
            }
        })
    }
    const changeDataHandler = (event, obData) => {
        if (obData) {
            setDataCompany({...dataCompany, ...obData});
            return;
        }
        setDataCompany(prev => ({...prev, ...{[event.target.name]: event.target.value}}));
    }

    return (
        <Box pl={2} pr={2} mb={3}>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Наименование компании'/>
                <CompanyField name='cart' value={{get: dataCompany.company, set: changeDataHandler}}></CompanyField>
            </div>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='ФИО представителя компании'/>
                <NameField value={{get: dataCompany.fullName, set: changeDataHandler}} name='cart'></NameField>
            </div>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Телефон для связи'/>
                <PhoneInputMask value={{get: dataCompany.phone, set: changeDataHandler}} classSelect='cart-react-dadata__input'/>
            </div>
            <div className='data-block-input'>
                <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Дополнительное описание'/>
                <DescriptionField value={{get: dataCompany.description, set: changeDataHandler}}/>
            </div>
            <ButtonSubmitOrder eventSubmit={submitFormHandler}/>
        </Box>
    )
}
const mapStateToProps = store => ({
    cartProducts: store.cart
})
export default connect(mapStateToProps)(FormOrderCompany)
