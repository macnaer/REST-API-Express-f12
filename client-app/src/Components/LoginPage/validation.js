import * as yup from 'yup';

export const validationSchema = yup.object({
    login: yup.string().required('Поле не може бути пустим'),
    password: yup.mixed().required('Поле не може бути пустим'),
})