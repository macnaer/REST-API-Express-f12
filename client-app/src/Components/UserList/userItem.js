import { useNavigate } from 'react-router-dom';


const UserItem = ({userItem: { id, Name, Surname, Email, Role }} ) => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{Name}</td>
        <td>{Surname}</td>
        <td>{Email}</td>
        <td>{Role}</td>
        <td className="d-flex">
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => navigate(`/adminPanel/userInfo/${id}`)}
          >
            Info
          </button>
          <button type="button" className="btn btn-warning m-2">
            Edit
          </button>
          <button type="button" className="btn btn-danger m-2">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserItem;