import { Link, useNavigate  } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                      className="btn btn-secondary"
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
