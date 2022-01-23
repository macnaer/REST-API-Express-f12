import InputGroup from "../Containers/InputGroup";
import { useFormik, Form, FormikProvider } from "formik";
import Button from "react-bootstrap/Button";
import { validationSchema } from "./validation";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { WithApiService } from "../Hoc/With-api-service";
import jwt from "jsonwebtoken";
// Import actions
import { loginUserAction } from "../../Actions/loginUserUactions/loginUserAction";

import { useDispatch } from "react-redux";

const LoginPage = (props) => {
  const { ApiService } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    ApiService.loginUser(values).then((response) => {
      const { data } = response;
      localStorage.setItem("token", data);
      if (data.message) {
        setFieldError("Email", data.message);
        setFieldError("Password", data.message);
      } else {
        dispatch(loginUserAction(jwt.decode(data, { complete: true }).payload));
        navigate("/adminPanel");

      }
    });
  };

  const initialValues = {
    Email: "",
    Password: "",
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const { touched, errors, values, handleChange, handleSubmit, setFieldError } =
    formik;

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="row">
        <div className="col-4"></div>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="col-4">
            <InputGroup
              field="Email"
              label="Email"
              type="text"
              touched={touched.Email}
              error={errors.Email}
              value={values.Email}
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
            <div className="row d-flex justify-content-around">
              <Button type="submit" variant="secondary col-4">
                Login
              </Button>
              <Link className="btn btn-secondary col-4" to="/">
                Back to Main
              </Link>
            </div>
          </Form>
        </FormikProvider>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default WithApiService()(LoginPage);
