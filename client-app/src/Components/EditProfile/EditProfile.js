import InputGroup from "../Containers/InputGroup";
import { useFormik, Form, FormikProvider } from "formik";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { validationSchema } from "./validation";
import { useSelector } from "react-redux";


const EditProfile =()=>{

const { userProdileInfo } = useSelector((store) => store.login);

const onSubmit = ()=> {
    console.log(values)
}

 const initialValues = {
    Name: userProdileInfo.Name,
    Surname: userProdileInfo.Surname,
    Email: userProdileInfo.Email,
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
      <h1>Редагування профілю</h1>
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


export default EditProfile;