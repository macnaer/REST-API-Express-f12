import * as yup from 'yup';

export const validationSchema = yup.object({
    Name: yup.string().required("Required"),
    Surname: yup.string().required("Required"),
    Email: yup.string().email("Invalid Email").required("Required"),
    Password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    Password2: yup
        .string()
        .required('Please Enter your new password').oneOf([yup.ref("Password"), null], "Passwords must match"),
    Role: yup.string().required("Required"),
})