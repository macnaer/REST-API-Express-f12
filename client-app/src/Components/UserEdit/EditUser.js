import InputGroup from "../Containers/InputGroup";
import { useFormik, Form, FormikProvider } from "formik";
import Button from "react-bootstrap/Button";
import { validationSchema } from "./validation";
import { useEffect } from "react";
import { WithApiService } from "../Hoc/With-api-service";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditUser =(props)=>{
 const { id } = useParams();
 const { ApiService } = props;
 const dispatch = useDispatch();
 const { user } = useSelector((store) => store.infoUser);
 const navigate = useNavigate();
 useEffect(() => {
   ApiService.getUserById(id).then((response) => {
     const { data } = response;
     dispatch(getUserId({ ...data }));
   });
 }, [ApiService, dispatch]);

const onSubmit = ()=> {
    try {
      console.log({ id: user.id, ...values });
      ApiService.updateUserInfo({...values, id: user.id}).then((res) =>
        navigate("/adminPanel/userList")
      );
    } catch (error) {
      
    }
}

 const initialValues = {
   Name: user.Name,
   Surname: user.Surname,
   Email: user.Email,
 };

const formik = useFormik({
   // validationSchema,
    initialValues,
    onSubmit,
    enableReinitialize: true
  });
  
     const { touched, errors, values, handleChange, handleSubmit } = formik;
 

    return(
      <>
      <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="col-4 row border border-secondary rounded-3 bg-primary text-dark bg-opacity-10 shadow-lg mb-3">
              <h1 className="fw-bold mt-2 text-center">Edit user</h1>
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
                Edit
              </Button>
            </div>
          </Form>
        </FormikProvider>
        <div className="col-4"></div>
      </div>
    </div>
</>
    );

};

const getUserId = (data) => {
  return {
    type: "GET_USER_INFO",
    payload: { ...data },
  };
};

export default WithApiService()(EditUser);