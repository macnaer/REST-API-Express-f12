import { useEffect } from "react";
import { WithApiService } from "../Hoc/With-api-service";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { LoadUsers } from "../../Actions/DashBoardActions/DashBoardActions";

const DashBoard = (props) => {
  console.log("props -> ", props);
  const { ApiService } = props;

  const { UsersList } = useSelector((store) => store.DashboardReducer);
  const userLogined = useSelector((store) => store.loginReduser);
  console.log("logined => ", userLogined);
  const dispatch = useDispatch();

  console.log("UsersList ", UsersList);

  useEffect(() => {
    ApiService.getAllUsers().then((response) => {
      const { data } = response;
      console.log("getAllUsers ", data);
      dispatch(LoadUsers(data));
    });
  }, []);

  const user = UsersList.map((item) => (
    <div key={item.Name}>
      <p>{item.Name}</p>
      <p>{item.Email}</p>
    </div>
  ));

  return (
    <div>
      <h1>Dashboard</h1>
      <Link className="btn btn-secondary" to="/login">
        Login
      </Link>
      {user}
    </div>
  );
};

export default WithApiService()(DashBoard);
