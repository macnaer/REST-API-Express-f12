import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UserItem from './userItem';
import { WithApiService } from "../Hoc/With-api-service";
import { LoadUsers } from "../../Actions/DashBoardActions/DashBoardActions";

const UserList = (props) => {
  const { UsersList } = useSelector((store) => store.dashboard);
  const { ApiService } = props;
  const dispatch = useDispatch();

    useEffect(() => {
      ApiService.getAllUsers().then((response) => {
        const { data } = response;
        dispatch(LoadUsers(data));
      });
    }, [ApiService, dispatch]);

  return (
    <>
      <h2>UserList</h2>
      <table class="table align-middle table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">SurnName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody d-flex align-items-center>
          {UsersList.map((el, idx) => <UserItem key={idx} userItem={el}/> )}
        </tbody>
      </table>
    </>
  );
};

export default WithApiService()(UserList);
