import { useSelector } from "react-redux";
import UserItem from './userItem';

const UserList = () => {
  const { UsersList } = useSelector((store) => store.dashboard);

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

export default UserList;
