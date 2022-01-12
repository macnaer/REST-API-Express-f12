import InputGroup from '../Containers/InputGroup'
import { useFormik } from "formik";
import Button from 'react-bootstrap/Button';
import {validationSchema} from './validation';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { loginUser } from './actionLogin';
import { useSelector, useDispatch } from 'react-redux';

const LoginPage = () => {

    const navigate = useNavigate()
  



    const onSubmit = () => {
        console.log(formik.values);
        navigate('/');
    }

    const initialValues = {
        login: '',
        password: ''
    }
    const formik = useFormik({
        validationSchema,
        initialValues,
        onSubmit,
        validateOnBlur: true,
      });

    return <div className="container">
        <h1>Login</h1>
        <div className="row">
        <div className="col-4"></div>
        <form onSubmit={(e) => formik.handleSubmit(e)} className="col-4">
        <InputGroup
          field="login"
          label="Login"
          type="text"
          touched={formik.touched.login}
          error={formik.errors.login}
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputGroup
          field="password"
          label="Password"
          type="password"
          touched={formik.touched.password}
          error={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="row d-flex justify-content-around">
            <Button type='submit' variant="secondary col-4">Login</Button>
       <Link class="btn btn-secondary col-4" to='/'>Back to Main</Link>
        </div>
       
        </form>
        <div className="col-4"></div>
        </div>
    </div>
}

export default LoginPage