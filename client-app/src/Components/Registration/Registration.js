import InputGroup from "../Containers/InputGroup";
import { useFormik, Form, FormikProvider } from "formik";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { validationSchema } from "./validation";


const Registration =()=>{

const onSubmit = ()=> {
    console.log(values)
}

 const initialValues = {
    Name:"",
    Surname:"",
    Email: "",
    Password: "",
  };

const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });
  
     const { touched, errors, values, handleChange, handleSubmit, setFieldError } = formik;
 

    return(
        <>
        <div className="container">
      <h1>Реєстрація</h1>
      <div className="row">
        <div className="col-4"></div>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="col-4">
              <InputGroup
              field="Name"
              label="Name"
              type="text"
              touched={touched.Name}
              error={errors.Name}
              value={values.Name}
              onChange={handleChange}
            />
            <InputGroup
              field="Surname"
              label="Surname"
              type="text"
              touched={touched.Surname}
              error={errors.Surname}
              value={values.Surname}
              onChange={handleChange}
            />
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

        </>
    );

};


export default Registration;