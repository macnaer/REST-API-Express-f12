import { useEffect } from 'react';
import { WithApiService } from "../Hoc/With-api-service";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const UserInfo = (props) => {
  const { id } = useParams(); 
  const { ApiService } = props;
  const dispatch = useDispatch();
  const { user } = useSelector( store => store.infoUser);
  useEffect(() => {
    ApiService.getUserById(id).then((response) => {
      const { data } = response;
      dispatch(getUserId({...data}));
    });
  }, [ApiService, dispatch]);

  const { Name, Surname, Email, Role } = user;
	return (
    <>
      <h2>USER INFO</h2>
      <p>Name: {Name}</p>
      <p>Surname: {Surname}</p>
      <p>Email: {Email}</p>
      <p>Role: {Role}</p>
    </>
  );
};

export default WithApiService()(UserInfo);

const getUserId = (data) => {
   return {
     type: "GET_USER_INFO",
     payload: {...data},
   };
 };