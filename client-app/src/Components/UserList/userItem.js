import React from "react"
import { WithApiService } from "../Hoc/With-api-service";
import { useDispatch } from "react-redux";
import { UserDel } from "../../Actions/DashBoardActions/DashBoardActions";

//dial
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const UserItem = (props) => {
  const { ApiService, userItem: { id, Name, Surname, Email, Role } } = props;
  const dispatch = useDispatch();

  //dial
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseNo = () => {
    setOpen(false);
  };

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
          <button onClick={handleClickOpen}
            type="button" class="btn btn-danger m-2">
            Delete
          </button>
        </td>
      </tr>

      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Ви дійсно хочете видалити користувача ${Name} ${Surname}?`}
        </DialogTitle>

        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}>ні
          </Button>
          <Button
            onClick={() => {
              ApiService.deleteUser(id);
              dispatch(UserDel(id))
            }} autoFocus>
            так видалити
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WithApiService()(UserItem);