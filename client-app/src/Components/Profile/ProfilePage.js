import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { userProdileInfo } = useSelector((store) => store.loginReducer);
  return (
    <>
      <div>{`UserName ${userProdileInfo.name}`}</div>
    </>
  );
};

export default ProfilePage;
