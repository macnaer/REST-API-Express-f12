import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { WithApiService } from "../Hoc/With-api-service";
import Spiner from "../Spiner/Spiner";
import { getUserId } from "../UserInfo";

const ProfilePage = (props) => {
  const { ApiService } = props;
  const { userProdileInfo } = useSelector((store) => store.login);
  const { user } = useSelector((store) => store.infoUser);
  const [showSpiner, setShowSpiner] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowSpiner(true);
    ApiService.getUserById(userProdileInfo.id).then((response) => {
      const { data } = response;
      dispatch(getUserId({ ...data }));
      setShowSpiner(false);
    });
  }, [ApiService, dispatch]);

  return (
    <div className="row">
      <div className="col-4"></div>
      {showSpiner && <Spiner />}
      <div className="col-4">
        <div className="row">
          <div className="text-center">
            <span className="fw-bold">Name:</span> {user.Name}
          </div>
          <div className="text-center">
            <span className="fw-bold">Surname:</span> {user.Surname}
          </div>
          <div className="text-center">
            <span className="fw-bold">Email:</span> {user.Email}
          </div>

          <div className="text-center">
            <Link class="btn btn-secondary" to="/adminPanel/editProfile">
              Edit Profile
            </Link>
          </div>
          <div className="text-center">
            <Link
              class="btn btn-secondary"
              to="/adminPanel/profile/changePassword"
            >
              ChangePassword
            </Link>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default WithApiService()(ProfilePage);
