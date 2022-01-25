import { useSelector } from "react-redux";

import { Link } from "react-router-dom";



const ProfilePage = () => {
  const { userProdileInfo } = useSelector((store) => store.login);

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="row">
          <div className="text-center">
            <span className="fw-bold">Name:</span> {userProdileInfo.Name}
          </div>
          <div className="text-center">
            <span className="fw-bold">Surname:</span> {userProdileInfo.Surname}
          </div>
          <div className="text-center">
            <span className="fw-bold">Email:</span> {userProdileInfo.Email}
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

export default ProfilePage;
