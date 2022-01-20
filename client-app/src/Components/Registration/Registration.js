import React from "react";
import InputGroup from "../Containers/InputGroup";
import { useFormik, Form, FormikProvider } from "formik";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { validationSchema } from "./validation";

//select
import Box from "@mui/material/Box";
import InputLabel1 from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { makeStyles } from "@material-ui/core/styles";
import { versionsByValue } from "tedious/lib/tds-versions";

import ApiService from "../../Services/ApiService";
import { SliderValueLabelUnstyled } from "@mui/material";


const styles = {
  marTop: {
    marginTop: '15px'
  }
}
const useStyles = makeStyles(styles);

const Registration = () => {
  const classes = useStyles();




  const initialValues = {
    Name: "",
    Surname: "",
    Email: "",
    Password: "",
    Password2: "",
    role: ""
  };

  const onSubmit = (values, props) => {

    const { Name, Surname, Email, Password, role } = values;
    console.log(values)
    // ApiService.register(UserData).then(result => {
    //   const { data, status } = result;
    //   if (status != undefined && status === 400) {
    //     console.log(data)
    //   }
    //   else {
    //     data = new User({
    //       Name,
    //       Surname,
    //       Email,
    //       Role,
    //       Password: bcrypt.hashSync(Password, salt),
    //     });
    //     console.log(status)
    //   };

    // })
  }

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const { touched, errors, values, handleChange, handleSubmit, setFieldError, setFieldValue } = formik;


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className="col-4">
              <h1>Реєстрація</h1>
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

              <InputGroup
                field="Password2"
                label="Сonfirm password"
                type="password"
                touched={touched.Password2}
                error={errors.Password2}
                value={values.Password2}
                onChange={handleChange}
              />
              <Box sx={{ minWidth: 120 }} className={classes.forSelect}>
                <FormControl fullWidth>
                  <InputLabel1 id="demo-simple-select-label">Roles</InputLabel1>
                  <Select
                    labelId="demo-simple-select-label"
                    id="role"
                    value={values.role}
                    name="role"
                    label="Roles"
                    onChange={handleChange}
                  >
                    <MenuItem value={'admin'}>admin</MenuItem>
                    <MenuItem value={'user'}>user</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div className="row d-flex justify-content-around">
                <Button className={classes.marTop} type="submit" variant="secondary col-4">
                  Login
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


export default Registration;