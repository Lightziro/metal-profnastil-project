import React, {useState} from "react";
import PhoneInputMask from "../../fields/Mask/PhoneInputMask/PhoneInputMask";
import NameField from "../../fields/name-field/NameField";
import TextAreaField from "../../fields/textarea-field/TextAreaField";
import EmailField from "../../fields/email-field/EmailField";
import styles from './FormQuestion.module.scss';
import {useFormik} from "formik";
import {defaultFormQuestion} from "./constants";
import instance from "../../server/axios";
import {QuestionSchema} from "../../schemas/QuestionSchema";

export default function FormQuestion() {
    const [successSend, setSuccessSend] = useState(false);
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: defaultFormQuestion,
        validationSchema: QuestionSchema,
        onSubmit: values => {
            setLoading(true);
            instance.post('/api/question', values)
                .then((response) => {
                    console.log(response);
                    setSuccessSend(true);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error);
                })
        },
    });
    const fieldError = (field: string) => {
        return formik.errors[field] && formik.touched[field] ? formik.errors[field] : null
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <h6 className={styles.titleText}>Задать вопрос</h6>
            <div className={styles.formQuestion}>
                <div>
                    <div className='labelField required'>Как вас зовут</div>
                    <NameField error={fieldError('name')} handleChange={formik.setFieldValue} name='name'/>
                </div>
                <div>
                    <div className='labelField required'>Телефон</div>
                    <PhoneInputMask error={fieldError('phone')} handleChange={formik.setFieldValue} name='phone' value={formik.values.phone}
                                    classSelect='cart-react-dadata__input'/>
                </div>
                <div>
                    <div className='labelField'>Email</div>
                    <EmailField handleChange={formik.setFieldValue} name='email' value={formik.values.email}/>
                </div>
                <div>
                    <div className='labelField'>Комментарий</div>
                    <TextAreaField handleChange={formik.setFieldValue} name='description'
                                   value={formik.values.description}/>
                </div>
                <button disabled={loading} className='btn-primary'>Отправить запрос</button>
                {successSend && <div className={styles.successText}>Ваш запрос отправлен</div>}
            </div>
        </form>
    );
}
