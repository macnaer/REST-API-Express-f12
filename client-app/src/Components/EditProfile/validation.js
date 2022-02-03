import * as yup from "yup";

export const validationSchema = yup.object({
  Name: yup.string().required("Не будь лінивим!"),
  Surname: yup.string().required("Ну напиши ти хоть щось тут"),
  Email: yup.string().required("Поле не може бути пустим"),
});
