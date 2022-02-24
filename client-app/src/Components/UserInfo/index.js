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
     <div className="container">
       <div className="row">
        <div className="row col-4"></div>
          <div className="col-4 row border border-secondary rounded-3 bg-primary text-dark bg-opacity-10 shadow-lg mb-3 fs-2">
           <h2 className="fw-bold mt-2 text-center">USER INFO</h2>
           <p>Name: {Name}</p>
           <p>Surname: {Surname}</p>
           <p>Email: {Email}</p>
           <p>Role: {Role}</p>
          </div>
        </div>
     </div>
  );
};

export default WithApiService()(UserInfo);

export const getUserId = (data) => {
   return {
     type: "GET_USER_INFO",
     payload: {...data},
   };
 };