import React from "react";
import {Box, Typography} from "@material-ui/core";
import TypoGraphyAlign from "../../Components/TypographyAlign/TypoGraphyAlign";
import NameField from "../../HandlerField/NameField/NameField";
import PhoneInputMask from "../../Mask/PhoneInputMask/PhoneInputMask";
import EmailField from "../../HandlerField/EmailField/EmailField";
import DescriptionField from "../../HandlerField/DescriptionField/DescriptionField";
import {defaultForm} from "./Constants";
import {checkData} from "../../../default/check";
import {errorAlert, successAlert} from "../../../default/alert";

export default function FormQuestion(props) {
    const [formData, setFormData] = React.useState(defaultForm);

    const changeDataHandler = (event, obData) => {
        if (obData) {
            setFormData({...formData, ...obData});
            return;
        }
        setFormData(prev => ({...prev, ...{[event.target.name]: event.target.value}}));
    }

    const sendQuestion = () => {
        if (!checkData(formData)) {
            props.alert.set(errorAlert('Данные заполнены не корректно, укажите верные данные'));
            return;
        }
        props.loading.set(true);
        axios.post('/api/question/new', formData)
            .then((response) => {
                props.loading.set(false);
                props.alert.set(successAlert('Ваш вопрос успешно передан, скоро с вами свяжется Менеджер'));
            })
            .catch((error) => {
                console.log('Произошла ошибка при отправке запроса', error);
                props.alert.set(errorAlert('Произошла ошибка при отправке запроса, попробуйте ещё раз'));
            })
    }

    return (
        <div>
            <Typography variant='h6'>Задать вопрос</Typography>
            <div>
                <Box mb={1}>
                    <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='ФИО'/>
                    <NameField value={{get: formData.fullName, set: changeDataHandler}}
                               name='cart'></NameField>
                </Box>
                <Box mb={1}>
                    <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Телефон'/>
                    <PhoneInputMask value={{get: formData.phone, set: changeDataHandler}}
                                    classSelect='cart-react-dadata__input'/>
                </Box>
                <Box mb={1}>
                    <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Email почта'/>
                    <EmailField value={{get: formData.email, set: changeDataHandler}}
                                classList='cart-react-dadata__input'/>
                </Box>
                <Box mb={1}>
                    <TypoGraphyAlign var='body1' widthBox='100%' align='left' text='Комментарий'/>
                    <DescriptionField value={{get: formData.description, set: changeDataHandler}}/>
                </Box>
                <div className='block-button-submit-question'>
                    <button className='button-submit-question' onClick={sendQuestion}>Отправить вопрос</button>
                </div>
            </div>
        </div>
    );
}
