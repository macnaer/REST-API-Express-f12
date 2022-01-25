import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../../Actions/loginUserUactions/loginUserAction";

const Header = () => {
  const { isAuth } = useSelector((store) => store.login);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUserHandler = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserAction());
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="d-flex navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/products/add">
                    Головна
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  {isAuth && (
                    <button
                      onClick={logoutUserHandler}
                      type="button"
                      class="btn btn-secondary"
                    >
                      Вихід
                    </button>
                  )}
                  {!isAuth && (
                    <Link className="nav-link" to="/login">
                      Вхід
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
