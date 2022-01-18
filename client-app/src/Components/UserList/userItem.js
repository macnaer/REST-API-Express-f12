

const UserItem = ({userItem: { id, Name, Surname, Email, Role }} ) => {
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
          <button type="button" class="btn btn-danger m-2">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserItem;