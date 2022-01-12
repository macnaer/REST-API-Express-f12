import * as yup from 'yup';

export const validationSchema = yup.object({
    Email: yup.string().required('Поле не може бути пустим'),
    Password: yup.mixed().required('Поле не може бути пустим'),
})