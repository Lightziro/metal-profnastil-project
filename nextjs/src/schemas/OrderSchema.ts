import * as Yup from 'yup';
export const OrderSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Недопустимое имя')
        .max(50, 'Недопустимое имя')
        .required('Обязательное поле'),
    comment: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    phone: Yup.string().required('Обязательное поле'),
});
