import InputGroup from "../Containers/InputGroup";
import { useFormik, Form, FormikProvider } from "formik";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { validationSchema } from "./validation";
import { WithApiService } from "../Hoc/With-api-service";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../UserInfo";
import Spiner from "../Spiner/Spiner";

const EditProfile = (props) => {
  const [showSpiner, setShowSpiner] = useState(false);
  const { ApiService } = props;
  const { userProfileInfo } = useSelector((store) => store.login);
  const { user } = useSelector((store) => store.infoUser);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    setShowSpiner(true);
    await ApiService.getUserById(userProfileInfo.id).then((response) => {
      const { data } = response;
      dispatch(getUserId({ ...data }));
      setShowSpiner(false);
    });
  };

  useEffect(() => {
    fetchUser();
  }, [ApiService, dispatch]);

  const onSubmit = async () => {
    setShowSpiner(true);
    await ApiService.updateUser({ ...values, id: userProfileInfo.id });
    setShowSpiner(false);
    navigator("/adminPanel/profile");
  };

  const initialValues = {
    Name: user.Name,
    Surname: user.Surname,
    Email: user.Email,
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const { touched, errors, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div className="container">
        <h1>Редагування профілю</h1>
        {showSpiner && <Spiner />}
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
                  Edit
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

export default WithApiService()(EditProfile);
