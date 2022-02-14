import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { WithApiService } from "../Hoc/With-api-service";
import Spiner from "../Spiner/Spiner";
import { getUserId } from "../UserInfo";

const ProfilePage = (props) => {
  const { ApiService } = props;
  const { userProfileInfo } = useSelector((store) => store.login);
  const { user } = useSelector((store) => store.infoUser);
  const [showSpiner, setShowSpiner] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowSpiner(true);
    ApiService.getUserById(userProfileInfo.id).then((response) => {
      const { data } = response;
      dispatch(getUserId({ ...data }));
      setShowSpiner(false);
    });
  }, [ApiService, dispatch]);

  return (
    <div className="row">
      <div className="col-2"></div>
      {showSpiner && <Spiner />}
      <div className="col-6">
        <div className="row border border-secondary p-5 rounded-3 bg-primary p-2 text-dark bg-opacity-10 shadow-lg p-3 mb-5">
          <div className="fs-2" >
          <div>
            <span className="fw-bold mt-2" >Name:</span> {user.Name}
          </div>
          <div>
            <span className="fw-bold mt-2">Surname:</span> {user.Surname}
          </div>
          <div>
            <span className="fw-bold mt-2">Email:</span> {user.Email}
          </div>
          </div>

          <div className="w-100 d-flex justify-content-center ">
            <Link className="btn btn-secondary mt-5 w-50 text-center" to="/adminPanel/editProfile">
              Edit Profile
            </Link>
          </div>
          <div className="w-100 d-flex justify-content-center ">
            <Link
              className="btn btn-secondary mt-2 w-50"
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
