
import { WithApiService } from "../Hoc/With-api-service";
import { useDispatch } from "react-redux";
import { UserDel } from "../../Actions/DashBoardActions/DashBoardActions";


const UserItem = (props) => {
  const { ApiService, userItem: { id, Name, Surname, Email, Role } } = props;
  const dispatch = useDispatch();
  // const deleteUser = (id) => {
  //   ApiService.deleteUser(id).then(res => {
  //     // console.log('respons', res)
  //     const { data, status } = res
  //     if (status != undefined && status === 400) {
  //       console.log(data);
  //     }
  //     else {
  //       console.log(data);
  //     }
  //   })
  // }





  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{Name}</td>
        <td>{Surname}</td>
        <td>{Email}</td>
        <td>{Role}</td>
        <td className="d-flex">
          <button type="button" class="btn btn-primary m-2">
            Info
          </button>
          <button type="button" class="btn btn-warning m-2">
            Edit
          </button>
          <button onClick={() => {
            ApiService.deleteUser(id);
            dispatch(UserDel(id))

          }} type="button" class="btn btn-danger m-2">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default WithApiService()(UserItem);