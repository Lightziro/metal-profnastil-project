import * as Yup from 'yup';
export const QuestionSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Недопустимое имя')
        .max(100, 'Недопустимое имя')
        .required('Обязательное поле'),
    comment: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    email: Yup.string().email('Некорректный email'),
    phone: Yup.string().required('Обязательное поле'),
})
