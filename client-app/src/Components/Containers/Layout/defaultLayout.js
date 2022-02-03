import { Outlet } from "react-router-dom";
import Header from "./navBar";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="container pad">
        <Outlet />
      </div>
    </>
  );
};
export default DefaultLayout;
