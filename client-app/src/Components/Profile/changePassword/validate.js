import * as yup from "yup";

export const validationSchema = yup.object({
  OldPassword: yup.string().required("Поле не повинне бути пустим"),
  Password: yup
    .string()
    .min(5, "Пароль повинен містити мініму 5 символів")
    .matches(/[0-9a-zA-Z]/, "Пароль може містить латинські символи і цифри")
    .required("Поле не повинне бути пустим"),
  ConfirmPassword: yup
    .string()
    .min(5, "Пароль повинен містити мініму 5 символів")
    .oneOf([yup.ref("Password"), null], () => "Паролі повинні співпадати")
    .required("Поле не повинне бути пустим"),
});
