import * as yup from 'yup';

export const validationSchema = yup.object({
    Name: yup.string().required('Поле не може бути пустим'),
    Surname: yup.string().required('Поле не може бути пустим'),
    Email: yup.string().required('Поле не може бути пустим'),
    Password: yup.mixed().required('Поле не може бути пустим'),
})