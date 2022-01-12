import InputGroup from "../Containers/InputGroup";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import { validationSchema } from "./validation";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { WithApiService } from "../Hoc/With-api-service";
import jwt from 'jsonwebtoken'
// Import actions
import { loginUser } from "./actionLogin";


import { useSelector, useDispatch } from "react-redux";

const LoginPage = (props) => {
  // const userLogined = useSelector((store) => store.loginReduser);

  const { ApiService } = props;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = async () => {
    ApiService.loginUser(formik.values).then((response) => {
      const { data } = response;
      console.log(jwt.decode(data, { json: true }));
    })
  };

  const initialValues = {
    Email: "",
    Password: "",
  };
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validateOnBlur: true,
  });

  const {touched, errors, values, handleChange, handleBlur} = formik

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="row">
        <div className="col-4"></div>
        <form onSubmit={(e) => formik.handleSubmit(e)} className="col-4">
          <InputGroup
            field="Email"
            label="Email"
            type="text"
            touched={touched.Email}
            error={errors.Email}
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputGroup
            field="Password"
            label="Password"
            type="password"
            touched={touched.Password}
            error={errors.Password}
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="row d-flex justify-content-around">
            <Button type="submit" variant="secondary col-4">
              Login
            </Button>
            <Link className="btn btn-secondary col-4" to="/">
              Back to Main
            </Link>
          </div>
        </form>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default WithApiService()(LoginPage);
