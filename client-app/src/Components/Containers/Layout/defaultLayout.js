import { Outlet } from "react-router-dom";
import Header from "./navBar";
import jwt from "jsonwebtoken";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserByTokenAction } from "../../../Actions/loginUserUactions/loginUserAction";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (localStorage.token) {
    const userData = jwt.decode(localStorage.token, { complete: true }).payload;
    dispatch(loginUserByTokenAction(userData));
    navigate("/adminPanel");
  }

  return (
    <>
      <Header />
      <div className="container pad">
        <Outlet />
      </div>
    </>
  );
};
export default DefaultLayout;
