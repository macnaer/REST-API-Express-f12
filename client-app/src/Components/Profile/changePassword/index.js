import { validationSchema } from "./validate"
import { useFormik, Form, FormikProvider } from "formik";
import InputGroup from "../../Containers/InputGroup";
import { WithApiService } from "../../Hoc/With-api-service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ChangePassword = (props) => {
  const { ApiService } = props;
  const { userProdileInfo:{id} } = useSelector((store) => store.login);
  const navigate = useNavigate();
  const initialValues = {
    OldPassword: "",
    Password: "",
    ConfirmPassword: "",
  };

  const onSubmit = async () => {
    try {
          await ApiService.updatePassword({
            id: id,
            Password: values.OldPassword,
            newPassword: values.Password,
          }).then((res) => {
            navigate("/adminPanel")
          });
    } catch (error) {
      setFieldError("OldPassword", "Incorrect password");
    }

  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const { touched, errors, values, handleChange, handleSubmit, setFieldError } =
    formik;
  return (
    <>
      <div className="container">
        <h1 className="text-center">Change password</h1>
        <div className="row">
          <div className="col-4"></div>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className="col-4">
              <InputGroup
                field="OldPassword"
                label="Old Password"
                type="password"
                touched={touched.OldPassword}
                error={errors.OldPassword}
                value={values.OldPassword}
                onChange={handleChange}
              />
              <InputGroup
                field="Password"
                label="Password"
                type="password"
                touched={touched.Password}
                error={errors.Password}
                value={values.Password}
                onChange={handleChange}
              />
              <InputGroup
                field="ConfirmPassword"
                label="Confirm Password"
                type="password"
                touched={touched.ConfirmPassword}
                error={errors.ConfirmPassword}
                value={values.ConfirmPassword}
                onChange={handleChange}
              />
              <div className="row d-flex justify-content-around">
                <button type="submit" className="btn btn-secondary">
                  Change
                </button>
              </div>
            </Form>
          </FormikProvider>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default WithApiService()(ChangePassword);